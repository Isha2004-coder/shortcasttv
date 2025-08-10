import { useEffect, useRef, useState } from 'react';

function VideoPlayer({ src, title, user, views, isActive }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      if (isActive) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  }, [isActive]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: isActive ? 2 : 1,
        opacity: isActive ? 1 : 0,
        transition: 'opacity 0.3s ease-in-out',
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: '360px',
          height: '640px',
          position: 'relative',
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.6)',
        }}
      >
        <video
          ref={videoRef}
          src={src}
          muted
          loop
          playsInline
          controls={false}
          onClick={togglePlay}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />

        {/* Overlay text */}
        <div
          style={{
            position: 'absolute',
            bottom: '80px',
            left: '24px',
            color: 'white',
            textShadow: '0 0 5px rgba(0,0,0,0.7)',
            fontFamily: 'sans-serif',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
          }}
        >
          <h2 style={{ margin: 0, fontSize: '18px' }}>{title}</h2>
          <p style={{ margin: 0, fontSize: '14px' }}>{user}</p>
          <p style={{ margin: 0, fontSize: '12px', opacity: 0.8 }}>{views} views</p>
        </div>

        {/* Play icon (only when paused) */}
        {!isPlaying && (
          <div
            onClick={togglePlay}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '64px',
              height: '64px',
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backdropFilter: 'blur(4px)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
              transition: 'opacity 0.3s ease',
              pointerEvents: 'none',
            }}
          >
            <img
              src="/play-button.svg"
              alt="Play"
              style={{
                width: '28px',
                height: '28px',
                filter: 'drop-shadow(0 0 3px rgba(255,255,255,0.6))',
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default VideoPlayer;
