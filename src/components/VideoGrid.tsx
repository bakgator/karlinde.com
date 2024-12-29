import React, { useState, useEffect } from 'react';
import { Vimeo } from '@vimeo/vimeo';

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
    const fetchVimeoThumbnails = async () => {
      const client = new Vimeo(
        '9f63ea25ec3b291f01ea61d38d18f8ff71c02075',
        'okStOTaTXTMwBq4q5yquBZ7nuRY1VewzkArXR0S0O/gPdLNQaGtbyGKDUYQd9W5PBSh+iWKKFuIRmzPIFFKafaZLWFpJMZ6EGk+N8ldhJc+ta2BNtQ8KFOM9qYRQGl6W',
        'c2bddadd9678cf92f7c064929ea22042'
      );

      const vimeoVideos = videos.filter(video => video.type === 'vimeo');
      const updatedVideos = [...videos];
      
      for (const video of vimeoVideos) {
        try {
          const response = await new Promise<VimeoResponse>((resolve, reject) => {
            client.request({
              method: 'GET',
              path: `/videos/${video.id}`,
              query: {
                fields: 'pictures'
              }
            }, (error, body) => {
              if (error) {
                reject(error);
                return;
              }
              resolve(body as VimeoResponse);
            });
          });

          if (response.pictures && response.pictures.sizes) {
            const thumbnailUrl = response.pictures.sizes[2].link; // Medium size thumbnail
            const videoIndex = updatedVideos.findIndex(v => v.id === video.id);
            if (videoIndex !== -1) {
              updatedVideos[videoIndex] = {
                ...updatedVideos[videoIndex],
                thumbnail: thumbnailUrl
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

  const getEmbedUrl = (video: Video) => {
    if (video.type === 'vimeo') {
      return `https://player.vimeo.com/video/${video.id}`;
    } else {
      return `https://www.youtube.com/embed/${video.id}`;
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
              src={getEmbedUrl(video)}
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
                  className="play-button"
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