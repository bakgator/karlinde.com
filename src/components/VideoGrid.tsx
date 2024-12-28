import React, { useState } from 'react';

interface Video {
  url: string;
  type: 'vimeo' | 'youtube';
  id: string;
  title: string;
  subtitle: string;
  thumbnail: string;
}

const VideoGrid = () => {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const videos: Video[] = [
    { 
      url: "https://player.vimeo.com/video/1042513117?h=1606554dc9",
      type: "vimeo",
      id: "1042513117",
      title: "VIMEO VIDEO",
      subtitle: "A beautiful vimeo creation",
      thumbnail: "https://i.vimeocdn.com/video/1042513117_640x360.jpg"
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
      thumbnail: "https://i.vimeocdn.com/video/385563380_640x360.jpg"
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
  ];

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
                src={video.thumbnail} 
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