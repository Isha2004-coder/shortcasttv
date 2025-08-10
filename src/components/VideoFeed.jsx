import { useState, useEffect } from 'react';
import VideoPlayer from './VideoPlayer';

const videoList = [
  {
    src: '/videos/228847_small.mp4',
    title: 'Waterfall',
    user: '@ish',
    views: '1.2M',
  },
  {
    src: '/videos/266987_small.mp4',
    title: 'Road Trip',
    user: '@explorer',
    views: '850K',
  },
  {
    src: '/videos/284568_small.mp4',
    title: 'Nature Love',
    user: '@outdoors',
    views: '2.5M',
  },
];


function VideoFeed() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      setCurrentIndex((prev) => (prev + 1) % videoList.length);
    } else if (e.key === 'ArrowUp') {
      setCurrentIndex((prev) => (prev - 1 + videoList.length) % videoList.length);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      {videoList.map((video, index) => {
        const isActive = index === currentIndex;
        const isNext = index === currentIndex + 1;
  
        // Only render active + next for lazy loading effect
        if (!isActive && !isNext) return null;
  
        return (
          <VideoPlayer
            key={index}
            src={video.src}
            title={video.title}
            user={video.user}
            views={video.views}
            isActive={isActive}
          />
        );
      })}
    </>
  );
  
}

export default VideoFeed;
