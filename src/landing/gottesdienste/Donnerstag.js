import '../../index.css';

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

export default function Donnerstag() {

    const first = batch(Sticky(), Fade(), MoveOut(0, -200));
    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
    const FadeUp = batch(Fade(), Move(), Sticky());

    return (
        <ScrollContainer className='bg-gradient-to-r from-slate-100 to-slate-50'>
            <ScrollPage>
                <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -1000))}>
                    <div className="w-screen">
                        <h1 className="text-5xl text-center">Donnerstag</h1>
                    </div>
                </Animator>
            </ScrollPage>
        </ScrollContainer>
    )
}