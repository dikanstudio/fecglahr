import '../index.css';

import {
    ScrollContainer,
    ScrollPage,
    Animator,
    Sticky,
    Zoom,
    Fade,
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
import DienstagChurch from '../assets/dienste/dienstag/predigt.JPG';

export default function Dienste() {

    const first = batch(Sticky(), Fade(), MoveOut(0, -200));
    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
    const FadeUp = batch(Fade(), Move(), Sticky());

    return (
        <ScrollContainer className='bg-slate-100'>
            <ScrollPage>
                <Animator animation={batch(Fade(), Sticky(), MoveOut(-1000, 0))}>
                    <div className="w-screen">
                        <div className="">
                            <h1 className='m-10 text-2xl border-b-2 border-black'>Gottesdienste</h1>
                            <div className="flex m-10 space-x-6 justify-center">
                                <div className="">
                                    <div className="max-w-sm h-full relative overflow-hidden bg-white border border-gray-500 rounded-lg shadow-xl">
                                        <span
                                            class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                                        ></span>
                                        <a href="#">
                                            <img className="rounded-t-lg" src={DienstagChurch} alt="" />
                                        </a>
                                        <div className="p-5">
                                            <h5 className="text-2xl font-bold tracking-tight text-gray-900">Dienstag</h5>
                                            <h5 className="mb-2 text-lg font-bold tracking-tight text-blue-500">Gebetsgottesdienst</h5>
                                            <p className="mb-3 font-normal text-gray-800 border-b-2 border-black">19:00 Uhr</p>
                                            <p className="text-justify">Wie im Sonntagsgottesdienst singen wir auch hier Lobpreislieder und hören inspirierende Predigten, die uns helfen, unsere Beziehung zu Gott zu vertiefen und unsere geistlichen Bedürfnisse zu erfüllen. Wir nehmen uns Zeit für persönliche Gebete und ermutigen einander, für unsere Anliegen und Sorgen zu beten.</p>
                                            <Link to="dienstag" className="hidden">
                                                <button className="inline-flex mt-3 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                    Dienstag
                                                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                <div className="max-w-sm h-full relative overflow-hidden bg-white border border-gray-500 rounded-lg shadow-xl">
                                        <span
                                            class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                                        ></span>
                                        <a href="#">
                                            <img className="rounded-t-lg" src={FoyerOfChurch} alt="" />
                                        </a>
                                        <div className="p-5">
                                            <h5 className="text-2xl font-bold tracking-tight text-gray-900">Donnerstag</h5>
                                            <h5 className="mb-2 text-lg font-bold tracking-tight text-blue-500">Gebetsstunde</h5>
                                            <p className="mb-3 font-normal text-gray-800 border-b-2 border-black">19:00 Uhr</p>
                                            <p className="text-justify">Hier haben Sie die Möglichkeit, Gott auf eine tiefe und emotionale Weise zu erleben. Wir beten gemeinsam und tauschen uns über unsere Anliegen und Dankbarkeiten aus. In dieser Stunde finden Sie Raum, um zur Ruhe zu kommen und Ihre Sorgen und Nöte vor Gott zu bringen.</p>
                                            <Link to="donnerstag" className="hidden">
                                                <button className="inline-flex mt-3 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                    Donnerstag
                                                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="max-w-sm h-full relative overflow-hidden bg-white border border-gray-500 rounded-lg shadow-xl">
                                        <span
                                            class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                                        ></span>
                                        <a href="#">
                                            <img className="rounded-t-lg" src={FoyerOfChurch} alt="" />
                                        </a>
                                        <div className="p-5">
                                            <h5 className="text-2xl font-bold tracking-tight text-gray-900">Freitag</h5>
                                            <h5 className="mb-2 text-lg font-bold tracking-tight text-blue-500">Bibelstudium</h5>
                                            <p className="mb-3 font-normal text-gray-800 border-b-2 border-black">19:00 Uhr</p>
                                            <p className="text-justify">Unser wöchentliches Bibelstudium bietet Ihnen die Möglichkeit, die Bibel auf neue Weise zu entdecken und zu verstehen. Wir setzen uns gemeinsam mit dem Text auseinander, um Gottes Willen besser zu begreifen und unser Bibelverständnis zu vertiefen.</p>
                                            <Link to="freitag" className="hidden">
                                                <button className="inline-flex mt-3 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                    Freitag
                                                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="max-w-sm h-full relative overflow-hidden bg-white border border-gray-500 rounded-lg shadow-xl">
                                        <span
                                            class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                                        ></span>
                                        <a href="#">
                                            <img className="rounded-t-lg" src={FoyerOfChurch} alt="" />
                                        </a>
                                        <div className="p-5">
                                            <h5 className="text-2xl font-bold tracking-tight text-gray-900">Sonntag</h5>
                                            <h5 className="mb-2 text-lg font-bold tracking-tight text-blue-500">Gottesdienst</h5>
                                            <p className="mb-3 font-normal text-gray-800 border-b-2 border-black">10:00 Uhr</p>
                                            <p className="text-justify">Unser Sonntagsgottesdienst ist eine einladende und inspirierende Gemeinschaftserfahrung, bei der wir Gott durch Gesang, Predigten und Gebet ehren und preisen. Wir finden durch den Lobpreis und die Gemeinschaft mit anderen Menschen Stärkung und Ermutigung.</p>
                                            <Link to="sonntag" className="hidden">
                                                <button className="inline-flex mt-3 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                    Sonntag
                                                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Animator>
            </ScrollPage>
            <ScrollPage>
                <Animator animation={batch(MoveIn(3000, 0), Sticky(), MoveOut(0, -1000))}>
                    <div className="w-screen">
                        <div className="">
                            <h1 className='m-10 text-2xl border-b-2 border-black'>Junge Menschen</h1>
                            <div className="flex m-10 space-x-6 justify-center">
                                <div className="">
                                    <div className="max-w-sm h-full relative overflow-hidden bg-white border border-gray-500 rounded-lg shadow-xl">
                                        <span
                                            class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-sky-300 via-blue-500 to-green-600"
                                        ></span>
                                        <a href="#">
                                            <img className="rounded-t-lg" src={FoyerOfChurch} alt="" />
                                        </a>
                                        <div className="p-5">
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Kinderstunden</h5>
                                            <p className="text-justify">Kinderstunden bieten eine großartige Gelegenheit, Kinder für Gott und sein Wort zu begeistern, christliche Werte zu vermitteln und ihre Begabungen und Kompetenzen zu fördern. Es ist ein wichtiger Teil der christlichen Gemeinschaft und bietet den Kindern eine unterstützende Umgebung zum Wachsen und Lernen.</p>
                                            <button className="hidden mt-3 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                Kinderstunden
                                                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="max-w-sm h-full relative overflow-hidden bg-white border border-gray-500 rounded-lg shadow-xl">
                                        <span
                                            class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-sky-300 via-blue-500 to-green-600"
                                        ></span>
                                        <a href="#">
                                            <img className="rounded-t-lg" src={FoyerOfChurch} alt="" />
                                        </a>
                                        <div className="p-5">
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Jungscharstunden</h5>
                                            <p className="text-justify">Die Jungscharstunden bieten jungen Teenagern eine Möglichkeit, mit den Herausforderungen des Teenager-Alters umzugehen, Entscheidungen im Einklang mit ihrem Glauben zu treffen und ihre Beziehung zu Gott zu vertiefen. Es ist ein wichtiger Teil der christlichen Gemeinschaft und hilft den Jugendlichen, ihre Persönlichkeit zu entwickeln.</p>
                                            <button className="hidden mt-3 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                Jungscharstunden
                                                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="max-w-sm h-full relative overflow-hidden bg-white border border-gray-500 rounded-lg shadow-xl">
                                        <span
                                            class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-sky-300 via-blue-500 to-green-600"
                                        ></span>
                                        <a href="#">
                                            <img className="rounded-t-lg" src={FoyerOfChurch} alt="" />
                                        </a>
                                        <div className="p-5">
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Jugendstunden</h5>
                                            <p className="text-justify">Die Jugendstunden bieten jungen Erwachsenen die Möglichkeit, im Glauben zu wachsen und sich auf die Herausforderungen des Erwachsenwerdens vorzubereiten. Themen wie Ehe, Beziehungen und Versuchungen werden diskutiert, um den Jugendlichen zu helfen, sich auf ein Leben im Einklang mit ihrem Glauben vorzubereiten.</p>
                                            <button className="hidden mt-3 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                Jugendstunden
                                                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="max-w-sm h-full relative overflow-hidden bg-white border border-gray-500 rounded-lg shadow-xl">
                                        <span
                                            class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-sky-300 via-blue-500 to-green-600"
                                        ></span>
                                        <a href="#">
                                            <img className="rounded-t-lg" src={FoyerOfChurch} alt="" />
                                        </a>
                                        <div className="p-5">
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">AG's</h5>
                                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Cooming Soon</p>
                                            <button className="inline-flex mt-3 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                Bald Verfügbar
                                                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Animator>
            </ScrollPage>
        </ScrollContainer>
    )
}