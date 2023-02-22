import '../index.css';
import {useRef, useEffect} from 'react';

export default function Presentation() {

    var html = null;
    var canvas = null;
    useEffect(() => {
      html = document.documentElement;
      canvas = document.getElementById('playback');
      console.log(canvas);
    }, []);
    const context = canvas.getContext("2d");

    const frameCount = 229;

    const currentFrame = index => (
        `../assets/video/${index.toString().padStart(1, 'p')}.jpg`
      )
    
    const preloadImages = () => {
    for (let i = 1; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
    }
    };
    
    const img = new Image()
    img.src = currentFrame(1);
    canvas.width=1158;
    canvas.height=770;
    img.onload=function(){
    context.drawImage(img, 0, 0);
    }
    
    const updateImage = index => {
    img.src = currentFrame(index);
    context.drawImage(img, 0, 0);
    }
    
    window.addEventListener('scroll', () => {  
    const scrollTop = html.scrollTop;
    const maxScrollTop = html.scrollHeight - window.innerHeight;
    const scrollFraction = scrollTop / maxScrollTop;
    const frameIndex = Math.min(
        frameCount - 1,
        Math.ceil(scrollFraction * frameCount)
    );
    
    requestAnimationFrame(() => updateImage(frameIndex + 1))
    });
    
    preloadImages()
    
  return (
    <div className="">
        <canvas className="" id="playback">

        </canvas>
    </div>
  )
}