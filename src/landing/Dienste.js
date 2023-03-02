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
import FoyerOfChurch from '../assets/church/foyer.JPG'

export default function Dienste() {

    const first = batch(Sticky(), Fade(), MoveOut(0, -200));
    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
    const FadeUp = batch(Fade(), Move(), Sticky());

    return (
        <ScrollContainer className='bg-gradient-to-r from-slate-100 to-slate-50'>
            <ScrollPage>
                <Animator animation={batch(Fade(), Sticky(), MoveOut(-1000, 0))}>
                    <div className="w-screen">
                        <div className="">
                            <h1 className='m-10 text-2xl border-b-2'>Gottesdienste</h1>
                            <div className="flex m-10 space-x-6 justify-center">
                                <div className="">
                                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                                        <a href="#">
                                            <img className="rounded-t-lg" src={FoyerOfChurch} alt="" />
                                        </a>
                                        <div className="p-5">
                                            <h5 className="text-2xl font-bold tracking-tight text-gray-900">Dienstag</h5>
                                            <h5 className="mb-2 text-lg font-bold tracking-tight text-blue-500">Gebetsgottesdienst</h5>
                                            <p className="mb-3 font-normal text-gray-800">19:00 Uhr</p>
                                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                Read more
                                                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                                        <a href="#">
                                            <img className="rounded-t-lg" src={FoyerOfChurch} alt="" />
                                        </a>
                                        <div className="p-5">
                                            <h5 className="text-2xl font-bold tracking-tight text-gray-900">Donnerstag</h5>
                                            <h5 className="mb-2 text-lg font-bold tracking-tight text-blue-500">Gebetsstunde</h5>
                                            <p className="mb-3 font-normal text-gray-800">19:00 Uhr</p>
                                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                Read more
                                                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                                        <a href="#">
                                            <img className="rounded-t-lg" src={FoyerOfChurch} alt="" />
                                        </a>
                                        <div className="p-5">
                                            <h5 className="text-2xl font-bold tracking-tight text-gray-900">Freitag</h5>
                                            <h5 className="mb-2 text-lg font-bold tracking-tight text-blue-500">Bibelstudium</h5>
                                            <p className="mb-3 font-normal text-gray-800">19:00 Uhr</p>
                                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                Read more
                                                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                                        <a href="#">
                                            <img className="rounded-t-lg" src={FoyerOfChurch} alt="" />
                                        </a>
                                        <div className="p-5">
                                            <h5 className="text-2xl font-bold tracking-tight text-gray-900">Sonntag</h5>
                                            <h5 className="mb-2 text-lg font-bold tracking-tight text-blue-500">Gottesdienst</h5>
                                            <p className="mb-3 font-normal text-gray-800 border-b-2 border-black">10:00 Uhr</p>
                                            <p className="text-justify">Der Sonntagsgottesdienst ist ein zentraler Teil des christlichen Gemeindelebens. Hier kommen Gläubige zusammen, um gemeinsam Gott zu erleben und seine Botschaft zu hören.</p>
                                            <a href="#" className="inline-flex mt-3 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                Read more
                                                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Animator>
            </ScrollPage>
            <ScrollPage>
                <Animator animation={batch(MoveIn(3000, 0), Sticky(), MoveOut(0,-1000))}>
                    <div className="w-screen">
                        <div className="">
                            <h1 className='m-10 text-2xl border-b-2'>Junge Menschen</h1>
                            <div className="flex m-10 space-x-6 justify-center">
                                <div className="">
                                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                                        <a href="#">
                                            <img className="rounded-t-lg" src={FoyerOfChurch} alt="" />
                                        </a>
                                        <div className="p-5">
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Kinderstunden</h5>
                                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Informationen zur Kinderstunde</p>
                                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                Read more
                                                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                                        <a href="#">
                                            <img className="rounded-t-lg" src={FoyerOfChurch} alt="" />
                                        </a>
                                        <div className="p-5">
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Jungscharstunden</h5>
                                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Informationen zur Kinderstunde</p>
                                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                Read more
                                                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                                        <a href="#">
                                            <img className="rounded-t-lg" src={FoyerOfChurch} alt="" />
                                        </a>
                                        <div className="p-5">
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Jugendstunden</h5>
                                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Informationen zur Kinderstunde</p>
                                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                Read more
                                                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                                        <a href="#">
                                            <img className="rounded-t-lg" src={FoyerOfChurch} alt="" />
                                        </a>
                                        <div className="p-5">
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">AG's</h5>
                                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Cooming Soon</p>
                                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                Read more
                                                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                            </a>
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