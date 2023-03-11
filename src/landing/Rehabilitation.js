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

import Pic1 from '../assets/persons/_example/pic1.jpg';

import Card from '../components/card/Card.js';

export default function Rehabilitation() {

    const first = batch(Sticky(), Fade(), MoveOut(0, -200));
    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
    const FadeUp = batch(Fade(), Move(), Sticky());

    return (
        <ScrollContainer className='bg-gradient-to-r from-slate-100 to-slate-50'>
            <ScrollPage>
                <Animator animation={batch(Fade(), Sticky(), MoveOut(-1000, 0))}>
                    <div className="w-screen">
                        <div className="">
                            <h1 className='m-10 text-2xl border-b-2 border-black'>Gemeindeleitung</h1>
                            <div className="m-10 grid grid-cols-2 gap-4">
                                <Card img={Pic1} name="Viktor Binefeld" position="Pastor & Gemeindeleiter" telefon="+49 179 544 6297" email="viktor.binefeld@fecg-lahr.de" text="text" />
                                <Card img={Pic1} name="Freddi Koch" position="Rehabilitation" telefon="+49 176 288 2237 5" email="freddi.koch@fecg-lahr.de" text="text" />
                            </div>
                        </div>
                    </div>
                </Animator>
            </ScrollPage>
        </ScrollContainer>
    )
}