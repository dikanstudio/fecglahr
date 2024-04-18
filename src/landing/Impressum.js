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

export default function Impressum() {

    const first = batch(Sticky(), Fade(), MoveOut(0, -200));
    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
    const FadeUp = batch(Fade(), Move(), Sticky());

    return (
        <div className="">
            <div className="bg-slate-100 p-10">
            <h1 className="text-2xl mb-10">Impressum</h1>
                <p className="font-bold">Freie Evangeliums Christen Gemeinde Lahr e.V.</p>
                <p className="">Hans-Inderfurth-Str. 11</p>
                <p className="">77933 Lahr</p>
                <p className="">info@fecg-lahr.de</p>
                <p className="mt-4 font-bold">Vertretungsberechtigter Vorstand:</p>
                <p className="">Viktor Binefeld</p>
                <p className="">Hans-Inderfurth-Str. 11</p>
                <p className="">77933 Lahr</p>
                <p className="">info@fecg-lahr.de</p>
                <p className="mt-4 font-bold">Geschäftsführer:</p>
                <p className="">Philipp Binefeld</p>
                <p className="">Hans-Inderfurth-Str. 11</p>
                <p className="">77933 Lahr</p>
                <p className="">info@fecg-lahr.de</p>
                <p className="mt-4 font-bold">Registergericht:</p>
                <p className="">Amtsgericht Freiburg</p>
                <p className="font-bold">Registernummer:</p>
                <p className="">VR390880</p>
                <p className="font-bold">Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
                <p className="">10050/51345</p>
                <p className="mt-4 font-bold">Inhaltlich Verantwortlicher gemäß § 55 Abs. 2 RStV:</p>
                <p className="">Viktor Binefeld</p>
                <p className="">Hans-Inderfurth-Str. 11</p>
                <p className="">77933 Lahr</p>
                <p className="">info@fecg-lahr.de</p>
                <p className="mt-4 font-bold">Vertretung:</p>
                <p className="mt-4">Leon Dikan</p>
                <p className="">Hans-Inderfurth-Str. 11</p>
                <p className="">77933 Lahr</p>
                <p className="">info@fecg-lahr.de</p>
                <p className="mt-10">Hinweis:</p>
                <p className="">Wir sind als gemeinnütziger Verein anerkannt. Spenden an uns sind steuerlich absetzbar.</p>
            </div>
        </div>
    )
}