import axios from 'axios';
import { Video } from '../types/video';

export const getEmbedUrl = (video: Video, isFirst: boolean = false) => {
  if (video.type === 'vimeo') {
    return `https://player.vimeo.com/video/${video.id}${isFirst ? '?autoplay=1&muted=1' : ''}`;
  } else {
    return `https://www.youtube.com/embed/${video.id}${isFirst ? '?autoplay=1&mute=1' : ''}`;
  }
};

export const fetchVimeoThumbnails = async (videos: Video[]): Promise<Video[]> => {
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

  return updatedVideos;
};