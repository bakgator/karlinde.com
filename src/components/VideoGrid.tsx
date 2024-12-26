import React from 'react';

interface Video {
  url: string;
}

const VideoGrid = () => {
  // Example videos - replace with your actual video URLs
  const videos: Video[] = [
    { url: "https://example.com/video1.mp4" }, // Hero video
    { url: "https://example.com/video2.mp4" },
    { url: "https://example.com/video3.mp4" },
    { url: "https://example.com/video4.mp4" },
    { url: "https://example.com/video5.mp4" },
    { url: "https://example.com/video6.mp4" },
  ];

  const handleMouseEnter = (video: HTMLVideoElement) => {
    video.play();
  };

  const handleMouseLeave = (video: HTMLVideoElement) => {
    video.pause();
    video.currentTime = 0;
  };

  return (
    <div className="video-grid">
      {videos.map((video, index) => (
        <div 
          key={index} 
          className={`video-container ${index === 0 ? 'hero' : 'grid-item'}`}
        >
          <video
            muted
            loop
            playsInline
            onMouseEnter={(e) => handleMouseEnter(e.currentTarget)}
            onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
            poster="/placeholder.svg"
          >
            <source src={video.url} type="video/mp4" />
          </video>
        </div>
      ))}
    </div>
  );
};

export default VideoGrid;