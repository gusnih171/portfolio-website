import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import './GnText.css';

gsap.registerPlugin(TextPlugin);
const GnText = () => {
  
    const textRef = useRef(null);
  
    useEffect(() => {
      gsap.fromTo(textRef.current, 
        { x: -100, opacity: 0 }, 
      { x: 0, opacity: 1, duration: 2, text: "GN Productions ©", ease:"power2.in"}
      );
    }, []);

  return(
  <div>
    <div class="container">
      <div class="gnText" ref={textRef}></div>
    </div>
  </div>
)};

export default GnText;
