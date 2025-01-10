import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import VideoPlayer from './VideoPlayer';
import VideoThumbnail from './VideoThumbnail';
import { getEmbedUrl } from '../services/VideoService';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useToast } from "./ui/use-toast";
import { getVideos, addVideo, updateVideo, deleteVideo, reorderVideos, VideoRow } from '../services/supabase';
import { Loader2 } from "lucide-react";

interface VideoGridProps {
  isAdmin?: boolean;
}

const VideoGrid = ({ isAdmin = false }: VideoGridProps) => {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [newVideo, setNewVideo] = useState({
    url: '',
    title: '',
    subtitle: ''
  });

  const { data: videos = [], isLoading } = useQuery({
    queryKey: ['videos'],
    queryFn: getVideos
  });

  const addVideoMutation = useMutation({
    mutationFn: addVideo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['videos'] });
      toast({
        title: "Success",
        description: "Video added successfully"
      });
      setNewVideo({ url: '', title: '', subtitle: '' });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive"
      });
    }
  });

  const updateVideoMutation = useMutation({
    mutationFn: ({ id, updates }: { id: string; updates: Partial<VideoRow> }) => 
      updateVideo(id, updates),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['videos'] });
      toast({
        title: "Success",
        description: "Video updated successfully"
      });
    }
  });

  const reorderVideosMutation = useMutation({
    mutationFn: reorderVideos,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['videos'] });
      toast({
        title: "Success",
        description: "Video order updated"
      });
    }
  });

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const items = Array.from(videos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    const updatedVideos = items.map((video, index) => ({
      id: video.id,
      order_index: index
    }));

    reorderVideosMutation.mutate(updatedVideos);
  };

  const handleAddVideo = () => {
    if (!newVideo.url || !newVideo.title) {
      toast({
        title: "Error",
        description: "Please fill in at least the URL and title",
        variant: "destructive"
      });
      return;
    }

    let videoId = '';
    let videoType: 'youtube' | 'vimeo' = 'youtube';
    let thumbnail = '';

    try {
      if (newVideo.url.includes('youtube.com') || newVideo.url.includes('youtu.be')) {
        videoType = 'youtube';
        const urlParams = new URL(newVideo.url);
        videoId = urlParams.searchParams.get('v') || urlParams.pathname.slice(1);
        thumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
      } else if (newVideo.url.includes('vimeo.com')) {
        videoType = 'vimeo';
        videoId = newVideo.url.split('/').pop() || '';
      } else {
        throw new Error("Please enter a valid YouTube or Vimeo URL");
      }

      addVideoMutation.mutate({
        url: newVideo.url,
        type: videoType,
        video_id: videoId,
        title: newVideo.title,
        subtitle: newVideo.subtitle,
        thumbnail,
        order_index: videos.length
      });
    } catch (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive"
      });
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (isAdmin) {
    return (
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="space-y-8">
          <div className="bg-secondary p-4 rounded-lg space-y-4">
            <h3 className="text-lg font-semibold">Add New Video</h3>
            <div className="space-y-4">
              <Input
                placeholder="Video URL (YouTube or Vimeo)"
                value={newVideo.url}
                onChange={(e) => setNewVideo({ ...newVideo, url: e.target.value })}
              />
              <Input
                placeholder="Video Title"
                value={newVideo.title}
                onChange={(e) => setNewVideo({ ...newVideo, title: e.target.value })}
              />
              <Input
                placeholder="Video Subtitle"
                value={newVideo.subtitle}
                onChange={(e) => setNewVideo({ ...newVideo, subtitle: e.target.value })}
              />
              <Button onClick={handleAddVideo}>Add Video</Button>
            </div>
          </div>

          <Droppable droppableId="videos">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef} className="space-y-4">
                {videos.map((video, index) => (
                  <Draggable key={video.id} draggableId={video.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="bg-secondary p-4 rounded-lg"
                      >
                        <div className="flex gap-4 items-start">
                          <img 
                            src={video.thumbnail || '/placeholder.svg'} 
                            alt={video.title}
                            className="w-32 h-20 object-cover rounded"
                          />
                          <div className="flex-1 space-y-2">
                            <Input
                              value={video.title}
                              onChange={(e) => updateVideoMutation.mutate({
                                id: video.id,
                                updates: { title: e.target.value }
                              })}
                              placeholder="Video title"
                            />
                            <Input
                              value={video.subtitle || ''}
                              onChange={(e) => updateVideoMutation.mutate({
                                id: video.id,
                                updates: { subtitle: e.target.value }
                              })}
                              placeholder="Video subtitle"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    );
  }

  return (
    <div className="video-grid">
      {videos.map((video, index) => (
        <div 
          key={video.id} 
          className={`video-container ${index === 0 ? 'hero' : 'grid-item'}`}
        >
          {playingVideo === video.video_id ? (
            <VideoPlayer 
              embedUrl={getEmbedUrl({ ...video, id: video.video_id }, index === 0)}
              title={`Video ${index + 1}`}
            />
          ) : (
            <VideoThumbnail
              thumbnail={video.thumbnail}
              title={video.title}
              subtitle={video.subtitle}
              onPlay={() => setPlayingVideo(video.video_id)}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default VideoGrid;