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
                    <li className="font-bold mt-5 mb-1">Protokollierung von Zugriffsdaten</li>
                    <p className="mb-4">Beim Besuch dieser Website werden keine personenbezogene Daten verarbeitet. Dabei verarbeitete Datenkategorien: technische Verbindungsdaten des Serverzugriffs (IP-Adresse, Datum, Uhrzeit, abgefragte Seite, Browser-Informationen). Zweck der Verarbeitung:Überwachung der technischen Funktion und zur Erhöhung der Betriebssicherheit unseres Webservers, Auslieferung und Bereitstellung der Website und Anonymisierung und Erstellung von Statistiken. Die Rechtsgrundlage für die Verarbeitung:ein berechtigtes Interesse, das die Rechte und Freiheiten der betroffenen Personen überwiegt (Art. 6 (1) f DSGVO). Berechtigte Interessen in diesem Zusammenhang:starkes wirtschaftliches Interesse an einem sicheren und funktionierenden Betrieb der technischen Systeme. Eine Übermittlung von Daten erfolgt: an den Auftragsverarbeiter Alfahosting GmbH, Ankerstraße 3b, 06108 Halle (Saale), Deutschland (https://alfahosting.de/). Dauer der Verarbeitung: ist variabel und endet mit dem Wegfall des Verarbeitungszwecks.</p>
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