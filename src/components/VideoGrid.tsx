import React, { useState, useEffect } from 'react';
import VideoPlayer from './VideoPlayer';
import VideoThumbnail from './VideoThumbnail';
import { fetchVimeoThumbnails, getEmbedUrl } from '../services/VideoService';
import { Video } from '../types/video';

const VideoGrid = () => {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const [videos, setVideos] = useState<Video[]>([
    { 
      url: "https://vimeo.com/1043537890",
      type: "vimeo",
      id: "1043537890",
      title: "NEW VIMEO VIDEO 1",
      subtitle: "Latest creation",
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
      url: "https://player.vimeo.com/video/1042513117?h=1606554dc9",
      type: "vimeo",
      id: "1042513117",
      title: "VIMEO VIDEO",
      subtitle: "A beautiful vimeo creation",
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
      url: "https://vimeo.com/385563380",
      type: "vimeo",
      id: "385563380",
      title: "NATURE BEAUTY",
      subtitle: "Exploring the wonders of nature",
      thumbnail: ""
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
      url: "https://www.youtube.com/watch?v=qHuVnpOK91k",
      type: "youtube",
      id: "qHuVnpOK91k",
      title: "EPIC MOMENTS",
      subtitle: "Capturing life's best scenes",
      thumbnail: `https://img.youtube.com/vi/qHuVnpOK91k/maxresdefault.jpg`
    }
  ]);

  // Set initial playing video immediately
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