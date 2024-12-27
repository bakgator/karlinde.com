import React, { useState } from 'react';

interface Video {
  url: string;
  type: 'vimeo' | 'youtube';
  id: string;
}

const VideoGrid = () => {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const videos: Video[] = [
    { 
      url: "https://player.vimeo.com/video/1042513117?h=1606554dc9",
      type: "vimeo",
      id: "1042513117"
    },
    { 
      url: "https://www.youtube.com/watch?v=40oYTmYPbTY",
      type: "youtube",
      id: "40oYTmYPbTY"
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
            <button 
              onClick={() => setPlayingVideo(video.id)}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600 transition-colors"
            >
              Play Video
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default VideoGrid;