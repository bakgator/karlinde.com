import React from 'react';
import { getVideoEmbedUrl } from '../utils/videoUtils';

interface Video {
  url: string;
}

const VideoGrid = () => {
  // Example video URLs - replace with your actual video URLs
  const videos: Video[] = [
    { url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }, // Example YouTube video
    { url: "https://vimeo.com/148751763" }, // Example Vimeo video
    { url: "https://www.youtube.com/watch?v=jNQXAC9IVRw" },
    { url: "https://vimeo.com/565486457" },
    { url: "https://www.youtube.com/watch?v=M7lc1UVf-VE" },
    { url: "https://vimeo.com/336892869" },
  ];

  return (
    <div className="video-grid">
      {videos.map((video, index) => (
        <div 
          key={index} 
          className={`video-container ${index === 0 ? 'hero' : 'grid-item'}`}
        >
          <iframe
            src={getVideoEmbedUrl(video.url)}
            title={`Video ${index + 1}`}
            className="absolute top-0 left-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ))}
    </div>
  );
};

export default VideoGrid;