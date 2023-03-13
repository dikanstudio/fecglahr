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
import Pic1 from '../assets/persons/_example/pic1.jpg';

import Card from '../components/card/Card.js';

export default function Ansprechpartner() {

    const first = batch(Sticky(), Fade(), MoveOut(0, -200));
    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
    const FadeUp = batch(Fade(), Move(), Sticky());

    return (
        <ScrollContainer className='bg-gradient-to-r from-slate-100 to-slate-50'>
            <ScrollPage>
                <Animator animation={batch(Fade(), Sticky(), MoveOut(0, 1000))}>
                    <div className="w-screen">
                        <div className="">
                            <h1 className='m-10 text-2xl border-b-2 border-black'>Gemeindeleitung</h1>
                            <div className="m-10 grid grid-cols-2 gap-4">
                                <Card img={Pic1} name="Viktor Binefeld" position="1 Vors. Dipl. Pastor: Viktor Binefeld " telefon="+49 179 544 6297" email="viktor.binefeld@fecg-lahr.de" text="text" />
                                <Card img={Pic1} name="Freddy Koch" position="Stellvertreter & Rehaleiter" telefon="+49 176 288 2237 5" email="freddy.koch@fecg-lahr.de" text="text" />
                                <Card img={Pic1} name="Philipp Binefeld" position="Geschäftsführer" telefon="+49 XXX XXXX XXX" email="philipp.binefeld@fecg-lahr.de" text="text" />
                            </div>
                        </div>
                    </div>
                </Animator>
            </ScrollPage>
            <ScrollPage>
                <Animator animation={batch(MoveIn(0,-1000), Sticky(), MoveOut(0, -1000))}>
                    <div className="w-screen">
                        <div className="">
                            <h1 className='m-10 text-2xl border-b-2 border-black'>Gemeindeleitung</h1>
                            <div className="m-10 grid grid-cols-2 gap-4">
                                <Card img={Pic1} name="Paul Fischer" position="Jugendleitung" telefon="+49 XXX XXXX XXX" email="paul.fischer@fecg-lahr.de" text="text" />
                                <Card img={Pic1} name="Alexander Balz" position="Jungscharleitung" telefon="+49 XXX XXXX XXX" email="alex.balz@fecg-lahr.de" text="text" />
                                <Card img={Pic1} name="Vitali Paude" position="Kinderstundenleitung" telefon="+49 XXX XXXX XXX" email="vitali.paude@fecg-lahr.de" text="text" />
                            </div>
                        </div>
                    </div>
                </Animator>
            </ScrollPage>
        </ScrollContainer>
    )
}