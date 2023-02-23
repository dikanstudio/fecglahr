import '../index.css';
import { useRef, useEffect } from 'react';
import {
  ScrollContainer,
  ScrollPage,
  Animator,
  Sticky,
  StickyOut,
  Zoom,
  Fade,
  FadeOut,
  ZoomOut,
  batch,
  MoveOut,
  MoveIn,
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
  const ZoomOutScrollOut = batch(StickyIn(), FadeOut(), ZoomIn());
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
                  <p className="text-xl text-justify text-gray-700 indent-5">
                    Wir sind Christen des evangelischen Glaubens. Herzstück dessen und unserer Lehre ist das von unserem Herrn und Erlöser Jesus Christus verkündete Evangelium.
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
        <div className="w-screen">
          <div className="relative">
            <img src={HaalOfChurch} className="rounded-md"></img>
            <div className="absolute bottom-0">
              <div className="flex h-screen">
                <div className="m-auto">
                  <div className="flex m-10 space-x-6">
                  <Animator animation={MoveIn(-1000,0)}>
                    <div className='bg-white p-10 bg-opacity-80 shadow-md rounded-md flex flex-col space-y-2'>
                      <h1 className="text-4xl font-light">Unser Gemeindesaal</h1>
                      <p>Informationen zum Gemeindesaal</p>
                    </div>
                  </Animator>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollPage>
      <ScrollPage>
        <div className="w-screen">
          <div className="flex h-screen">
            <div className="m-auto">
              <div className="p-10">
                <div className="flex space-x-5 pb-5">
                <Animator animation={MoveIn(-1000, 0)}>
                  <div className="bg-white p-5 rounded-md shadow-md flex flex-col space-y-4">
                    <div className="flex justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
                      </svg>
                    </div>
                    <p className="text-center">
                      Jugend-, Teenager- und Kinderdienste sowie Gesangsgruppen und Gebetsdienste mit dem prophetischen Wort und Offenbarungen.
                    </p>
                    <div class="flex justify-center space-x-2">
                      <Link to="/dienste">
                        <button
                          type="button"
                          className="px-4 py-2 rounded-md text-white transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-orange-500 duration-300 ">
                          Dienste kennenlernen
                        </button>
                      </Link>
                    </div>
                  </div>
                </Animator>
                <Animator animation={MoveIn(0, -1000)}>
                  <div className="bg-white p-5 rounded-md shadow-md flex flex-col space-y-4">
                    <div className="flex justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10">
                        <path stroke-linecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                      </svg>
                    </div>
                    <p className="text-center">
                      Unsere Gemeinde beteiligt sich aktiv an verschiedenen Formen der Evangelisation und nutzt dabei verschiedene Methoden und Medien, die uns zur Verfügung stehen, darunter auch Videoübertragungen.
                    </p>
                    <div class="flex justify-center space-x-2">
                      <button
                        type="button"
                        className="px-4 py-2 rounded-md text-white transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-red-700 duration-300 ">
                        Besuche uns auf YouTube
                      </button>
                    </div>
                  </div>
                </Animator>
                  <Animator animation={MoveIn(1000, 0)}>
                  <div className="bg-white p-5 rounded-md shadow-md flex flex-col space-y-4">
                    <div className="flex justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                      </svg>
                    </div>
                    <p className="text-center">
                      Eine andere Form der Evangelisation, der christlichen Ethik und der Frömmigkeit, die durch den Dienst an einer besonderen Kategorie von Menschen zum Ausdruck kommt, ist der Dienst der Drogen- und Alkoholrehabilitation.
                    </p>
                    <div class="flex justify-center space-x-2">
                      <button
                        type="button"
                        className="px-4 py-2 rounded-md text-white transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-green-700 duration-300 ">
                        Informationen zur Rehabilitation
                      </button>
                    </div>
                  </div>
                  </Animator>
                </div>
                <Animator animation={MoveIn(0,1000)}>
                  <div className="p-10 bg-white rounded-md shadow-md flex flex-col space-y-4">
                    <h1 className="text-2xl">Geschichte der FECG Lahr</h1>
                    <p className="">Informationen</p>
                  </div>
                </Animator>
              </div>
            </div>
          </div>
        </div>
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