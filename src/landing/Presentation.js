import '../index.css';
import {useRef, useEffect} from 'react';
import {
   ScrollContainer, 
   ScrollPage, 
   Animator, 
   Sticky, 
   Zoom, 
   Fade, 
   batch,
   MoveOut,
   StickyIn,
   FadeIn,
   ZoomIn,
   Move

} from 'react-scroll-motion';

export default function Presentation() {
  
  const first = batch(Sticky(), Fade(), MoveOut(0, -200));
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Sticky(), Move());

  return (
    <ScrollContainer>
      <ScrollPage>
        <Animator animation={first}>
          <h1 className="text-3xl">Test</h1>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={ZoomInScrollOut}>
          <div className="w-screen flex justify-center">
            <h1 className="text-3xl">I' Fade up</h1>
          </div>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={FadeUp}>
          <h1 className="text-3xl">Move</h1>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  )
}