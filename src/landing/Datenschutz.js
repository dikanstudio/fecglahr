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
                <h1 className="text-2xl mb-10">Datenschutz</h1>
                <ul className="list-inside list-decimal">
                    <li className="font-bold mb-1">Verantwortliche Stelle</li>
                    <p className="mb-4">Verantwortliche Stelle im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:</p>
                    <p className="ml-5">Leon Dikan</p>
                    <p className="ml-5">Hans-Inderfurth-Str. 11</p>
                    <p className="ml-5">77933 Lahr</p>
                    <li className="font-bold mt-5 mb-1">Datenerhebung</li>
                    <p className="">Da wir keine personenbezogenen Daten auf unserer Webseite erheben, gibt es auch keine Verwendungszwecke oder Rechtsgrundlagen für die Verarbeitung von personenbezogenen Daten.</p>
                    <li className="font-bold mt-5 mb-1">Protokollierung von Zugriffsdaten</li>
                    <p className="mb-4">Bei jedem Zugriff auf unsere Webseite werden automatisch Zugriffsdaten erhoben und in Protokolldateien auf dem Server unseres Providers Strato gespeichert. Diese Daten umfassen:</p>
                    <ul className="list-inside list-disc ml-5">
                        <li className="">Die IP-Adresse des zugreifenden Geräts</li>
                        <li className="">Das Datum und die Uhrzeit des Zugriffs</li>
                        <li className="">Die aufgerufene Seite oder Datei</li>
                        <li className="">Die Meldung, ob der Zugriff erfolgreich war</li>
                        <li className="">Für mehr Details: <a className="text-blue-500" href="https://www.strato.de/blog/dsgvo-logfiles/">https://www.strato.de/blog/dsgvo-logfiles/</a></li>
                    </ul>
                    <li className="font-bold mt-5 mb-1">Cookies</li>
                    <p className="mb-4">Unsere Webseite verwendet keine Cookies.</p>
                    <li className="font-bold mt-5 mb-1">Sicherheit</li>
                    <p className="mb-4">Wir legen großen Wert auf den Schutz der personenbezogenen Daten unserer Nutzer. Wir haben angemessene technische und organisatorische Maßnahmen ergriffen, um sicherzustellen, dass Ihre Daten vor Verlust, Diebstahl oder Missbrauch geschützt sind. Unsere Mitarbeiter sind zur Einhaltung der Datenschutzbestimmungen verpflichtet und wir haben Verfahren zur Überprüfung der Sicherheit unserer Systeme eingerichtet. Wenn Sie dennoch Bedenken hinsichtlich der Sicherheit Ihrer Daten haben, zögern Sie bitte nicht, uns zu kontaktieren.</p>
                    <li className="font-bold mt-5 mb-1">Auftragsverarbeitung</li>
                    <p className="mb-4">Unsere Webseite verwendet keine Cookies.</p>
                </ul>
            </div>
        </div>
    )
}