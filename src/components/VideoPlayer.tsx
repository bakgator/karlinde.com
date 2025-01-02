import React from 'react';

interface VideoPlayerProps {
  embedUrl: string;
  title: string;
}

const VideoPlayer = ({ embedUrl, title }: VideoPlayerProps) => (
  <iframe
    src={embedUrl}
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    className="absolute top-0 left-0 w-full h-full"
    title={title}
  />
);

export default VideoPlayer;