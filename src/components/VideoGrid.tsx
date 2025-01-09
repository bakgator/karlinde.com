import React, { useState, useEffect } from 'react';
import VideoPlayer from './VideoPlayer';
import VideoThumbnail from './VideoThumbnail';
import { fetchVimeoThumbnails, getEmbedUrl } from '../services/VideoService';
import { Video } from '../types/video';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useToast } from "./ui/use-toast";

interface VideoGridProps {
  isAdmin?: boolean;
}

const VideoGrid = ({ isAdmin = false }: VideoGridProps) => {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const { toast } = useToast();
  const [newVideo, setNewVideo] = useState({
    url: '',
    title: '',
    subtitle: ''
  });
  const [videos, setVideos] = useState<Video[]>([
    { 
      url: "https://www.youtube.com/watch?v=qHuVnpOK91k",
      type: "youtube",
      id: "qHuVnpOK91k",
      title: "EPIC MOMENTS",
      subtitle: "Capturing life's best scenes",
      thumbnail: `https://img.youtube.com/vi/qHuVnpOK91k/maxresdefault.jpg`
    },
    {
      url: "https://www.youtube.com/watch?v=oc7EaU6v46k",
      type: "youtube",
      id: "oc7EaU6v46k",
      title: "ADVENTURE TIME",
      subtitle: "Journey through excitement",
      thumbnail: `https://img.youtube.com/vi/oc7EaU6v46k/maxresdefault.jpg`
    },
    {
      url: "https://vimeo.com/385563380",
      type: "vimeo",
      id: "385563380",
      title: "NATURE BEAUTY",
      subtitle: "Exploring the wonders of nature",
      thumbnail: ""
    },
    { 
      url: "https://www.youtube.com/watch?v=40oYTmYPbTY",
      type: "youtube",
      id: "40oYTmYPbTY",
      title: "YOUTUBE VIDEO",
      subtitle: "An amazing youtube creation",
      thumbnail: `https://img.youtube.com/vi/40oYTmYPbTY/maxresdefault.jpg`
    },
    { 
      url: "https://player.vimeo.com/video/1042513117?h=1606554dc9",
      type: "vimeo",
      id: "1042513117",
      title: "VIMEO VIDEO",
      subtitle: "A beautiful vimeo creation",
      thumbnail: ""
    },
    { 
      url: "https://vimeo.com/1043541496",
      type: "vimeo",
      id: "1043541496",
      title: "NEW VIMEO VIDEO 2",
      subtitle: "Another masterpiece",
      thumbnail: ""
    },
    { 
      url: "https://vimeo.com/1043537890",
      type: "vimeo",
      id: "1043537890",
      title: "NEW VIMEO VIDEO 1",
      subtitle: "Latest creation",
      thumbnail: ""
    }
  ]);

  useEffect(() => {
    if (videos.length > 0 && !playingVideo) {
      setPlayingVideo(videos[0].id);
    }
  }, [videos]);

  useEffect(() => {
    const updateThumbnails = async () => {
      const updatedVideos = await fetchVimeoThumbnails(videos);
      setVideos(updatedVideos);
    };

    updateThumbnails();
  }, []);

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const items = Array.from(videos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setVideos(items);
    toast({
      title: "Video order updated",
      description: "The new order has been saved."
    });
  };

  const updateVideoDetails = (index: number, field: keyof Video, value: string) => {
    const updatedVideos = [...videos];
    updatedVideos[index] = {
      ...updatedVideos[index],
      [field]: value
    };
    setVideos(updatedVideos);
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

    // Extract video ID and type from URL
    let videoId = '';
    let videoType: 'youtube' | 'vimeo' = 'youtube';
    let thumbnail = '';

    if (newVideo.url.includes('youtube.com') || newVideo.url.includes('youtu.be')) {
      videoType = 'youtube';
      const urlParams = new URL(newVideo.url);
      videoId = urlParams.searchParams.get('v') || urlParams.pathname.slice(1);
      thumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    } else if (newVideo.url.includes('vimeo.com')) {
      videoType = 'vimeo';
      videoId = newVideo.url.split('/').pop() || '';
      // Vimeo thumbnail will be fetched by the existing useEffect
    } else {
      toast({
        title: "Error",
        description: "Please enter a valid YouTube or Vimeo URL",
        variant: "destructive"
      });
      return;
    }

    const newVideoObject: Video = {
      url: newVideo.url,
      type: videoType,
      id: videoId,
      title: newVideo.title,
      subtitle: newVideo.subtitle,
      thumbnail: thumbnail
    };

    setVideos([...videos, newVideoObject]);
    setNewVideo({ url: '', title: '', subtitle: '' });
    toast({
      title: "Success",
      description: "Video added successfully"
    });
  };

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
                              onChange={(e) => updateVideoDetails(index, 'title', e.target.value)}
                              placeholder="Video title"
                            />
                            <Input
                              value={video.subtitle}
                              onChange={(e) => updateVideoDetails(index, 'subtitle', e.target.value)}
                              placeholder="Video subtitle"
                            />
                            <Input
                              value={video.thumbnail}
                              onChange={(e) => updateVideoDetails(index, 'thumbnail', e.target.value)}
                              placeholder="Thumbnail URL"
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
          key={index} 
          className={`video-container ${index === 0 ? 'hero' : 'grid-item'}`}
        >
          {playingVideo === video.id ? (
            <VideoPlayer 
              embedUrl={getEmbedUrl(video, index === 0)}
              title={`Video ${index + 1}`}
            />
          ) : (
            <VideoThumbnail
              thumbnail={video.thumbnail}
              title={video.title}
              subtitle={video.subtitle}
              onPlay={() => setPlayingVideo(video.id)}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default VideoGrid;