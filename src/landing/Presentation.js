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

import { Outlet, Link } from "react-router-dom";

import FrontOfChurch from '../assets/church/front.JPG';
import HaalOfChurch from '../assets/church/haal.JPG';
import FoyerOfChurch from '../assets/church/foyer.JPG'

export default function Presentation() {
  
  const first = batch(Sticky(), Fade(), MoveOut(0, -200));
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());

  return (
    <ScrollContainer className='bg-gradient-to-r from-slate-100 to-slate-50'>
      <img src={FrontOfChurch} className="rounded-md"></img>
      <ScrollPage>
        <Animator animation={batch(Fade(), Sticky(), Move(0, -200))}>
        <div className="w-screen">
          <div className="flex m-10 space-x-6">
            <div className='bg-white p-10 first-letter shadow-md rounded-md w-9/12'>
              <h1 className="text-7xl font-extralight border-b-2 border-b-black p-2">Freie Evangeliums Christen Gemeinde Lahr</h1>
              <div className="mt-4">
                <p className="text-xl text-justify text-gray-700">
            Wir sind Christen des evangelischen Glaubens, denn das Herzstück unseres Glaubens und unserer Lehre ist das von unserem Herrn und Erlöser Jesus Christus verkündete Evangelium.
            Wir glauben, dass der Herr Jesus Christus die einzige Person ist, durch die jeder, der an ihn glaubt und seine Sünden bereut, Vergebung der Sünden und ewiges Leben erhält. 
            Wir glauben, dass dieses Evangelium, das von unserem Herrn Jesus Christus und seinen Aposteln gepredigt wurde, das einzige Kriterium für unser moralisches, sittliches und geistliches Leben ist.
            Wir glauben auch, dass dieses Evangelium von Jesus Christus, sein Tod und seine Auferstehung, die einzige Garantie des Heils für jeden ist, der an ihn glaubt.
                </p>
              </div>
            </div>
            <div className="bg-white p-10 first-letter shadow-md rounded-md w-3/12 flex flex-col space-y-5">
              <h1 className="text-4xl font-extralight font-sans border-b-2 border-b-black">Gottesdienste</h1>
              <div className="flex flex-col p-2">
                <p className="text-2xl text-justify text-gray-700">Sonntag - 10.00 Uhr</p>
                <p className="text-2xl text-justify text-gray-700">Dienstag - 19:00 Uhr</p>
                <p className="text-2xl text-justify text-gray-700">Freitag - 19.00 Uhr</p>
              </div>
              <div className="">
                <p className="text-2xl text-justify text-gray-700 bottom-0">
                Hans-Inderfurthstr. 11
                </p>
                <p className="text-2xl text-justify text-gray-700 bottom-0">
                77933 Lahr
                </p>
              </div>
              <div className="flex flex-row space-x-5">
                <p className="text-2xl text-justify text-gray-700 bottom-0">
                Pastor:
                </p>
                <p className="text-2xl text-justify text-gray-700 bottom-0">
                Viktor Binefeld
                </p>
              </div>
            </div>
          </div>
        </div>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animator={ZoomInScrollOut}>
          <img src={HaalOfChurch} className="rounded-md"></img>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  )
}
{/* <div className='flex justify-center bg-gray-50'>
  <div className='w-9/12'>
    <div className='flex h-screen'>
      <div className='m-auto'>
        <div className='bg-white p-10 first-letter shadow-md rounded-md'>
          <h1 className="text-7xl font-extralight font-sans">Freie Evangeliums</h1>
          <h1 className="text-7xl font-extralight">Christen Gemeinde Lahr</h1>
          <div className="mt-4">
            <p className="text-xl text-justify text-gray-700">
        Wir sind Christen des evangelischen Glaubens, denn das Herzstück unseres Glaubens und unserer Lehre ist das von unserem Herrn und Erlöser Jesus Christus verkündete Evangelium.
        Wir glauben, dass der Herr Jesus Christus die einzige Person ist, durch die jeder, der an ihn glaubt und seine Sünden bereut, Vergebung der Sünden und ewiges Leben erhält. 
        Wir glauben, dass dieses Evangelium, das von unserem Herrn Jesus Christus und seinen Aposteln gepredigt wurde, das einzige Kriterium für unser moralisches, sittliches und geistliches Leben ist.
        Wir glauben auch, dass dieses Evangelium von Jesus Christus, sein Tod und seine Auferstehung, die einzige Garantie des Heils für jeden ist, der an ihn glaubt.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> */}

{/* <ScrollContainer>
  <ScrollPage>
    <Animator animation={first}>
      <div className="w-screen flex justify-center">
        <img src={FrontOfChurch}></img>
      </div>
    </Animator>
  </ScrollPage>
  <ScrollPage>
    <Animator animation={ZoomInScrollOut}>
      <div className="w-full flex justify-center">
        <h1>Test</h1>
      </div>
    </Animator>
  </ScrollPage>
  <ScrollPage>
    <Animator animation={FadeUp}>
      <div className="w-full flex justify-center">
        <img src={HaalOfChurch}></img>
      </div>
    </Animator>
  </ScrollPage>
</ScrollContainer> */}