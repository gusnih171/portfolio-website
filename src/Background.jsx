import React, { useEffect, useRef } from 'react';
import './Background.css';
import backVideo from './photos/blueRed.mp4';

const Background = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2.0; 
    }
  }, []);

  return (
    <div>
      <div className='overlay'>
        <video ref={videoRef} src={backVideo} autoPlay loop muted />
      </div>
    </div>
  );
}

export default Background;
