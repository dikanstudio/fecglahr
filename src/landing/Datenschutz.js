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

export default function Datenschutz() {

    const first = batch(Sticky(), Fade(), MoveOut(0, -200));
    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
    const FadeUp = batch(Fade(), Move(), Sticky());

    return (
        <div className="">
            <div className="bg-gradient-to-r from-slate-100 to-slate-50 p-10">
                <h1 className="text-2xl">Datenschutz</h1>
            </div>
        </div>
    )
}