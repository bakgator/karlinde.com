import React from 'react';

interface VideoThumbnailProps {
  thumbnail: string;
  title: string;
  subtitle: string;
  onPlay: () => void;
}

const VideoThumbnail = ({ thumbnail, title, subtitle, onPlay }: VideoThumbnailProps) => (
  <div className="video-thumbnail-container">
    <img 
      src={thumbnail || '/placeholder.svg'} 
      alt={title}
      className="absolute top-0 left-0 w-full h-full object-cover"
    />
    <div className="video-overlay">
      <div className="video-text">
        <p className="video-subtitle">{subtitle}</p>
        <h2 className="video-title">{title}</h2>
      </div>
      <button 
        onClick={onPlay}
        className="play-button"
      >
        PLAY VIDEO
      </button>
    </div>
  </div>
);

export default VideoThumbnail;