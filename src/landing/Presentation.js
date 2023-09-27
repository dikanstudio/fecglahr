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
import FoyerOfChurch from '../assets/church/foyer.JPG';
import GradedFront from '../assets/church/gradedFront.jpg';
import SideView from '../assets/church/sideView.jpg';
import EntryChurch from '../assets/church/entryChurch.jpg';

export default function Presentation() {

  const first = batch(Sticky(), Fade(), MoveOut(0, -200));
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const ZoomOutScrollOut = batch(StickyIn(), FadeOut(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());

  return (
    <div className="">
      <div className="hidden 2xl:block xl:block lg:block">
        <ScrollContainer className='bg-gradient-to-r from-slate-100 to-slate-50'>
          <div className="relative">
            <img src={SideView} className=""></img>
            <div className="absolute top-3/4 left-1/2">
              <button className="bg-white rounded-full animate-bounce p-3">
                <div className="">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
          <ScrollPage>
            <img className="" src={EntryChurch}></img>
            <Animator animation={batch(Fade(), Sticky(), Move(0, -200))}>
              <div className="w-screen">
                <div className="2xl:flex 2xl:m-10 2xl:space-x-6 2xl:justify-stretch xl:flex xl:m-10 xl:space-x-6 xl:justify-stretch lg:flex lg:m-10 lg:space-x-6 lg:justify-stretch">
                  <div className='bg-white p-10 first-letter shadow-md rounded-md w-9/12 justify-evenly'>
                    <h1 className="2xl:text-7xl xl:text-6xl lg:text-5xl font-extralight border-b-2 border-b-black p-2">Freie Evangeliums Christen Gemeinde Lahr</h1>
                    <div className="mt-4">
                      <p className="2xl:text-xl xl:text-xl lg:text-lg text-justify text-gray-700 indent-5">
                        Wir sind Christen des evangelischen Glaubens. Herzstück dessen und unserer Lehre ist das von unserem Herrn und Erlöser Jesus Christus verkündete Evangelium.
                        Wir glauben, dass der Herr Jesus Christus die einzige Person ist, durch die jeder, der an ihn glaubt und seine Sünden bereut, Vergebung der Sünden und ewiges Leben erhält.
                        Wir glauben, dass dieses Evangelium, das von unserem Herrn Jesus Christus und seinen Aposteln gepredigt wurde, das einzige Kriterium für unser moralisches, sittliches und geistliches Leben ist.
                        Wir glauben auch, dass dieses Evangelium von Jesus Christus, sein Tod und seine Auferstehung, die einzige Garantie des Heils für jeden ist, der an ihn glaubt.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white p-10 first-letter shadow-md rounded-md w-3/12 flex flex-col space-y-5 justify-evenly">
                    <h1 className="2xl:text-4xl xl:text-3xl lg:text-3xl font-extralight font-sans border-b-2 border-b-black">Gottesdienste</h1>
                    <ul className="list-disc list-inside">
                      <li className="2xl:text-2xl xl:text-xl lg:text-base text-gray-700">Sonntag - 10.00 Uhr</li>
                      <li className="2xl:text-2xl xl:text-xl lg:text-base text-gray-700">Dienstag - 19:00 Uhr</li>
                      <li className="2xl:text-2xl xl:text-xl lg:text-base text-gray-700">Freitag - 19.00 Uhr</li>
                    </ul>
                    <ul className="list-none bottom-0">
                      <li className="2xl:text-2xl xl:text-xl lg:text-lg text-gray-700">Hans-Inderfurthstr. 11</li>
                      <li className="2xl:text-2xl xl:text-xl lg:text-lg text-gray-700">77933 Lahr</li>
                    </ul>
                    <ul className="list-none bottom-0">
                      <li className="2xl:text-2xl xl:text-xl lg:text-lg text-gray-700">Pastor: Viktor Binefeld</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Animator>
          </ScrollPage>
          <ScrollPage>
            <div className="w-screen">
              <div className="relative">
                <img src={HaalOfChurch} className=""></img>
                <div className="absolute bottom-0">
                  <div className="flex h-screen">
                    <div className="m-auto">
                      <div className="flex m-10 space-x-6">
                        <Animator animation={batch(MoveIn(-1000, 0), Fade())}>
                          <div className='bg-white p-10 bg-opacity-80 shadow-md rounded-md flex flex-col space-y-2'>
                            <h1 className="text-4xl font-light">Unser Gemeindesaal</h1>
                            <p>Platz für ca. 1600 Personen</p>
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
                    <div className="grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 grid-col-1 gap-5 items-stretch">
                      <Animator animation={MoveIn(-1000, 0)}>
                        <div className="bg-white p-5 rounded-md shadow-md flex flex-col justify-evenly h-full">
                          <div className="flex justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
                            </svg>
                          </div>
                          <p className="text-center">
                            Jugend-, Teenager- und Kindergottesdienste sowie Gesangsgruppen und Gebetsgottesdienste mit dem prophetischen Wort und Offenbarungen.
                          </p>
                          <div className="flex justify-center mt-4">
                            <Link to="/">
                              <button
                                type="button"
                                className="px-4 py-2 rounded-md text-white transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-orange-500 duration-300 ">
                                Bald verfügbar
                              </button>
                            </Link>
                          </div>
                        </div>
                      </Animator>
                      <Animator animation={MoveIn(0, -1000)}>
                        <div className="bg-white p-5 rounded-md shadow-md flex flex-col justify-evenly h-full">
                          <div className="flex justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                              <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                            </svg>
                          </div>
                          <p className="text-center">
                            Unsere Gemeinde beteiligt sich aktiv an verschiedenen Formen der Evangelisation und nutzt dabei verschiedene Methoden und Medien, die uns zur Verfügung stehen, darunter auch Videoübertragungen.
                          </p>
                          <div className="flex justify-center mt-4">
                            <a href="https://www.youtube.com/@Betesdalahr" target="_blank">
                              <button
                                type="button"
                                className="px-4 py-2 rounded-md text-white transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-red-700 duration-300 ">
                                Besuche uns auf YouTube
                              </button>
                            </a>
                          </div>
                        </div>
                      </Animator>
                      <Animator animation={MoveIn(1000, 0)}>
                        <div className="bg-white p-5 rounded-md shadow-md flex flex-col justify-evenly h-full">
                          <div className="flex justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                          </div>
                          <p className="text-center">
                            Eine andere Form der Evangelisation, der christlichen Ethik und der Frömmigkeit, die durch den Dienst an einer besonderen Kategorie von Menschen zum Ausdruck kommt, ist der Dienst der Drogen- und Alkoholrehabilitation.
                          </p>
                          <div className="flex justify-center mt-4">
                            <Link to="/">
                              <button
                                type="button"
                                className="px-4 py-2 rounded-md text-white transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-green-700 duration-300 ">
                                Bald verfügbar
                              </button>
                            </Link>
                          </div>
                        </div>
                      </Animator>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollPage>
        </ScrollContainer>

      </div>
      <div className="2xl:hidden xl:hidden lg:hidden block">
        <ScrollContainer className='bg-gradient-to-r from-slate-100 to-slate-50'>
          <ScrollPage>
            <Animator animation={batch(Fade(), Sticky(), Move(0, -200))}>
              <div className="w-screen h-screen">
                <img src={SideView} className="object-cover"></img>
                <div className="p-10 first-letter flex flex-col space-y-5 justify-evenly">
                  <h1 className="2xl:text-4xl xl:text-3xl lg:text-3xl font-extralight font-sans border-b-2 border-b-black">Gottesdienste</h1>
                  <ul className="list-disc list-inside">
                    <li className="2xl:text-2xl xl:text-xl lg:text-base text-gray-700">Sonntag - 10.00 Uhr</li>
                    <li className="2xl:text-2xl xl:text-xl lg:text-base text-gray-700">Dienstag - 19:00 Uhr</li>
                    <li className="2xl:text-2xl xl:text-xl lg:text-base text-gray-700">Freitag - 19.00 Uhr</li>
                  </ul>
                  <ul className="list-none bottom-0">
                    <li className="2xl:text-2xl xl:text-xl lg:text-lg text-gray-700">Hans-Inderfurthstr. 11</li>
                    <li className="2xl:text-2xl xl:text-xl lg:text-lg text-gray-700">77933 Lahr</li>
                  </ul>
                  <ul className="list-none bottom-0">
                    <li className="2xl:text-2xl xl:text-xl lg:text-lg text-gray-700">Pastor: Viktor Binefeld</li>
                  </ul>
                </div>
              </div>
            </Animator>
          </ScrollPage>
          <ScrollPage>
            <Animator animation={ZoomInScrollOut}>
              <div className="w-screen scroll-smooth">
                <div className="m-5">
                  <div className='bg-white p-10 first-letter shadow-md rounded-md justify-evenly'>
                    <h1 className="font-extralight border-b-2 border-b-black p-2">Freie Evangeliums Christen Gemeinde Lahr</h1>
                    <div className="mt-4">
                      <p className="text-justify text-gray-700 indent-5">
                        Wir sind Christen des evangelischen Glaubens. Herzstück dessen und unserer Lehre ist das von unserem Herrn und Erlöser Jesus Christus verkündete Evangelium.
                        Wir glauben, dass der Herr Jesus Christus die einzige Person ist, durch die jeder, der an ihn glaubt und seine Sünden bereut, Vergebung der Sünden und ewiges Leben erhält.
                        Wir glauben, dass dieses Evangelium, das von unserem Herrn Jesus Christus und seinen Aposteln gepredigt wurde, das einzige Kriterium für unser moralisches, sittliches und geistliches Leben ist.
                        Wir glauben auch, dass dieses Evangelium von Jesus Christus, sein Tod und seine Auferstehung, die einzige Garantie des Heils für jeden ist, der an ihn glaubt.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Animator>
          </ScrollPage>
          <ScrollPage>
            <Animator animation={batch(StickyIn(), FadeIn(), ZoomIn())}>
              <div className="w-screen">
                <div className="relative">
                  <img src={HaalOfChurch} className="h-screen object-cover"></img>
                  <div className="absolute bottom-0">
                    <div className="flex h-screen">
                      <div className="m-auto">
                        <div className="flex m-10 space-x-6">
                          <Animator animation={batch(MoveIn(-1000, 0), Fade())}>
                            <div className='bg-white p-10 bg-opacity-80 shadow-md rounded-md flex flex-col space-y-2'>
                              <h1 className="text-4xl font-light">Unser Gemeindesaal</h1>
                              <p>Platz für ca. 1600 Personen</p>
                            </div>
                          </Animator>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Animator>
          </ScrollPage>
          <ScrollPage>
            <Animator animation={MoveIn(-1000, 0)}>
              <div className="w-full h-screen grid place-items-center">
                <div className="m-5">
                  <div className="bg-white p-5 rounded-md shadow-md flex flex-col justify-evenly">
                    <div className="flex justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
                      </svg>
                    </div>
                    <p className="text-center">
                      Jugend-, Teenager- und Kindergottesdienste sowie Gesangsgruppen und Gebetsgottesdienste mit dem prophetischen Wort und Offenbarungen.
                    </p>
                    <div className="flex justify-center mt-4">
                      <Link to="/">
                        <button
                          type="button"
                          className="px-4 py-2 rounded-md text-white transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-orange-500 duration-300 ">
                          Bald verfügbar
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Animator>
          </ScrollPage>
          <ScrollPage>
            <Animator animation={MoveIn(1000, 0)}>
              <div className="w-full h-screen grid place-items-center">
                <div className="m-5">
                  <div className="bg-white p-5 rounded-md shadow-md flex flex-col justify-evenly h-full">
                    <div className="flex justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                      </svg>
                    </div>
                    <p className="text-center">
                      Unsere Gemeinde beteiligt sich aktiv an verschiedenen Formen der Evangelisation und nutzt dabei verschiedene Methoden und Medien, die uns zur Verfügung stehen, darunter auch Videoübertragungen.
                    </p>
                    <div className="flex justify-center mt-4">
                      <a href="https://www.youtube.com/@Betesdalahr" target="_blank">
                        <button
                          type="button"
                          className="px-4 py-2 rounded-md text-white transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-red-700 duration-300 ">
                          Besuche uns auf YouTube
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Animator>
          </ScrollPage>
          <ScrollPage>
            <Animator animation={MoveIn(-1000, 0)}>
              <div className="w-full h-screen grid place-items-center">
                <div className="m-5">
                  <div className="bg-white p-5 rounded-md shadow-md flex flex-col justify-evenly h-full">
                    <div className="flex justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                      </svg>
                    </div>
                    <p className="text-center">
                      Eine andere Form der Evangelisation, der christlichen Ethik und der Frömmigkeit, die durch den Dienst an einer besonderen Kategorie von Menschen zum Ausdruck kommt, ist der Dienst der Drogen- und Alkoholrehabilitation.
                    </p>
                    <div className="flex justify-center mt-4">
                      <Link to="/">
                        <button
                          type="button"
                          className="px-4 py-2 rounded-md text-white transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-green-700 duration-300 ">
                          Bald verfügbar
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Animator>
          </ScrollPage>
        </ScrollContainer>
      </div>
    </div>
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