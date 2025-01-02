import React, { useState, useEffect } from 'react';
import { Vimeo } from '@vimeo/vimeo';
import axios from 'axios';

interface Video {
  url: string;
  type: 'vimeo' | 'youtube';
  id: string;
  title: string;
  subtitle: string;
  thumbnail: string;
}

interface VimeoResponse {
  pictures: {
    sizes: Array<{
      link: string;
      width: number;
    }>;
  };
}

const VideoGrid = () => {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const [videos, setVideos] = useState<Video[]>([
    { 
      url: "https://player.vimeo.com/video/1042513117?h=1606554dc9",
      type: "vimeo",
      id: "1042513117",
      title: "VIMEO VIDEO",
      subtitle: "A beautiful vimeo creation",
      thumbnail: "" // Will be set dynamically
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
      thumbnail: "" // Will be set dynamically
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

  useEffect(() => {
    // Auto-play the first video
    setPlayingVideo(videos[0].id);
  }, []);

  useEffect(() => {
    const fetchVimeoThumbnails = async () => {
      const vimeoVideos = videos.filter(video => video.type === 'vimeo');
      const updatedVideos = [...videos];
      
      for (const video of vimeoVideos) {
        try {
          const response = await axios.get(`https://api.vimeo.com/videos/${video.id}`, {
            headers: {
              'Authorization': `bearer c2bddadd9678cf92f7c064929ea22042`
            }
          });

          if (response.data.pictures && response.data.pictures.sizes) {
            // Find the largest thumbnail
            const largestThumbnail = response.data.pictures.sizes.reduce((prev: any, current: any) => 
              (prev.width > current.width) ? prev : current
            );
            
            const videoIndex = updatedVideos.findIndex(v => v.id === video.id);
            if (videoIndex !== -1) {
              updatedVideos[videoIndex] = {
                ...updatedVideos[videoIndex],
                thumbnail: largestThumbnail.link
              };
            }
          }
        } catch (error) {
          console.error(`Error fetching thumbnail for video ${video.id}:`, error);
        }
      }

      setVideos(updatedVideos);
    };

    fetchVimeoThumbnails();
  }, []);

  const getEmbedUrl = (video: Video, isFirst: boolean = false) => {
    if (video.type === 'vimeo') {
      return `https://player.vimeo.com/video/${video.id}${isFirst ? '?autoplay=1&muted=1' : ''}`;
    } else {
      return `https://www.youtube.com/embed/${video.id}${isFirst ? '?autoplay=1&mute=1' : ''}`;
    }
  };

  return (
    <div className="video-grid">
      {videos.map((video, index) => (
        <div 
          key={index} 
          className={`video-container ${index === 0 ? 'hero' : 'grid-item'}`}
        >
          {playingVideo === video.id ? (
            <iframe
              src={getEmbedUrl(video, index === 0)}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
              title={`Video ${index + 1}`}
            />
          ) : (
            <div className="video-thumbnail-container">
              <img 
                src={video.thumbnail || '/placeholder.svg'} 
                alt={video.title}
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
              <div className="video-overlay">
                <div className="video-text">
                  <p className="video-subtitle">{video.subtitle}</p>
                  <h2 className="video-title">{video.title}</h2>
                </div>
                <button 
                  onClick={() => setPlayingVideo(video.id)}
                  className="play-button px-2 py-1"
                >
                  PLAY VIDEO
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default VideoGrid;
