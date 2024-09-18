import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import './Logo.css';
import PsgLogo from './photos/psg-logo.jpg';

gsap.registerPlugin(TextPlugin);
const Logo = () => {
  
    const textRef = useRef(null);
  
    useEffect(() => {
      gsap.fromTo(textRef.current, 
        { x: -100, opacity: 0 }, 
      { x: 0, opacity: 1, duration: 2, text: "PSG Handball Hall Of Fame", ease:"expo.inOut", y: -15}
      );
    }, []);

  return(
  <div>
    <div class="container-img">
      <div class="psgText" ref={textRef}></div>
      <img className="logo-psg" src={PsgLogo}/>
    </div>
  </div>
)};

export default Logo;
