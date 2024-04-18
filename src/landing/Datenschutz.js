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
            <div className="bg-slate-100 p-10">
                <h1 className="text-2xl mb-5 font-bold">Datenschutzerklärung</h1>
                <h1 className="text-xl mb-5 font-bold">1. Datenschutz auf einen Blick</h1>
                <p className="font-bold mb-5">Allgemeine Hinweise</p>
                <p className="mb-5">Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
                    passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
                    persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen
                    Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.</p>
                <p className="font-bold mb-5">Datenerfassung auf dieser Website</p>
                <p className="font-bold mb-5">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</p>
                <p className="mb-5">Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten
                    können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung entnehmen.</p>
                <p className="font-bold mb-5">Wie erfassen wir Ihre Daten?</p>
                <p className="mb-5">Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um
                    Daten handeln, die Sie in ein Kontaktformular eingeben.</p>
                <p className="mb-5">Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere ITSysteme
                    erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit
                    des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.</p>
                <p className="font-bold mb-5">Wofür nutzen wir Ihre Daten?</p>
                <p className="mb-5">Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere
                    Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.</p>
                <p className="font-bold mb-5">Welche Rechte haben Sie bezüglich Ihrer Daten?</p>
                <p className="mb-5">Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer
                    gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder
                    Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben,
                    können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter
                    bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                    Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.</p>
                <p className="mb-5">Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.</p>
                <h1 className="text-xl mb-5 font-bold">2. Hosting</h1>
                <p className="mb-5">Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>
                <p className="font-bold mb-5">Alfahosting</p>
                <p className="mb-5">Anbieter ist die Alfahosting GmbH, Ankerstraße 3b, 06108 Halle (Saale) (nachfolgend Alfahosting) Wenn Sie
                    unsere Website besuchen, erfasst Alfahosting verschiedene Logfiles inklusive Ihrer IP-Adressen.</p>
                <p className="mb-5">Details entnehmen Sie der Datenschutzerklärung von Alfahosting:
                    https://alfahosting.de/datenschutz/.</p>
                <p className="mb-5">Die Verwendung von Alfahosting erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein
                    berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website. Sofern eine
                    entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art.
                    6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies oder den
                    Zugriff auf Informationen im Endgerät des Nutzers (z. B. für Device-Fingerprinting) im Sinne des TTDSG
                    umfasst. Die Einwilligung ist jederzeit widerrufbar.</p>
                <p className="text-xl font-bold mb-5">3. Allgemeine Hinweise und Pflichtinformationen</p>
                <p className="font-bold mb-5">Datenschutz</p>
                <p className="mb-5">Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre
                    personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie
                    dieser Datenschutzerklärung.</p>
                <p className="mb-5">Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben.
                    Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende
                    Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie
                    und zu welchem Zweck das geschieht.</p>
                <p className="mb-5">Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail)
                    Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
                    möglich.</p>
                <p className="font-bold mb-5">Hinweis zur verantwortlichen Stelle</p>
                <p className="mb-5">Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
                <p className="">Freie Evangeliums Christen Gemeinde Lahr e.V.</p>
                <p className="">Hans-Inderfurth-Str. 11</p>
                <p className="">77933 Lahr</p>
                <p className="mb-5">info@fecg-lahr.de</p>
                <p className="mb-5">Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über
                    die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.)
                    entscheidet.</p>
                <p className="font-bold mb-5">Speicherdauer</p>
                <p className="mb-5">Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben
                    Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein
                    berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen,
                    werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer
                    personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im
                    letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.</p>
                <p className="font-bold mb-5">Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser
                    Website</p>
                <p className="mb-5">Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf
                    Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien
                    nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung in die Übertragung
                    personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von Art.
                    49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in
                    Ihr Endgerät (z. B. via Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich
                    auf Grundlage von § 25 Abs. 1 TTDSG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur
                    Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre
                    Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese
                    zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO.
                    Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f
                    DSGVO erfolgen. Über die jeweils im Einzelfall einschlägigen Rechtsgrundlagen wird in den folgenden
                    Absätzen dieser Datenschutzerklärung informiert.</p>
                <p className="font-bold mb-5">Empfänger von personenbezogenen Daten</p>
                <p className="mb-5">Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit verschiedenen externen Stellen zusammen. Dabei
                    ist teilweise auch eine Übermittlung von personenbezogenen Daten an diese externen Stellen erforderlich.
                    Wir geben personenbezogene Daten nur dann an externe Stellen weiter, wenn dies im Rahmen einer
                    Vertragserfüllung erforderlich ist, wenn wir gesetzlich hierzu verpflichtet sind (z. B. Weitergabe von Daten
                    an Steuerbehörden), wenn wir ein berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO an der Weitergabe
                    haben oder wenn eine sonstige Rechtsgrundlage die Datenweitergabe erlaubt. Beim Einsatz von
                    Auftragsverarbeitern geben wir personenbezogene Daten unserer Kunden nur auf Grundlage eines gültigen
                    Vertrags über Auftragsverarbeitung weiter. Im Falle einer gemeinsamen Verarbeitung wird ein Vertrag über
                    gemeinsame Verarbeitung geschlossen.</p>
                <p className="font-bold mb-5">Widerruf Ihrer Einwilligung zur Datenverarbeitung</p>
                <p className="mb-5">Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine
                    bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
                    Datenverarbeitung bleibt vom Widerruf unberührt.</p>
                <p className="font-bold mb-5">Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen
                    Direktwerbung (Art. 21 DSGVO)</p>
                <p className="mb-5">WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO
                    ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN
                    SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN
                    WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES
                    PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT,
                    ENTNEHMEN SIE DIESER DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN,
                    WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES
                    SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG
                    NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER DIE
                    VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON
                    RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).</p>
                <p className="mb-5">
                    WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN,
                    SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE
                    BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG
                    EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN
                    VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN
                    ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH
                    NACH ART. 21 ABS. 2 DSGVO).</p>
                <p className="font-bold mb-5">Beschwerderecht bei der zuständigen Aufsichtsbehörde</p>
                <p className="mb-5">Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer
                    Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes
                    oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger
                    verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.</p>
                <p className="font-bold mb-5">Recht auf Datenübertragbarkeit</p>
                <p className="mb-5">Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags
                    automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format
                    aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen
                    verlangen, erfolgt dies nur, soweit es technisch machbar ist.</p>
                <p className="font-bold mb-5">Auskunft, Berichtigung und Löschung</p>
                <p className="mb-5">Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche
                    Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den
                    Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie
                    zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.</p>
                <p className="font-bold mb-5">Recht auf Einschränkung der Verarbeitung</p>
                <p className="mb-5">Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                    Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in
                    folgenden Fällen:
                </p>
                <ul className="mb-5 list-disc">
                    <li>
                        <p className="mb-5">Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir
                            in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die
                            Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</p>
                    </li>
                    <li>
                        <p className="mb-5">Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie
                            statt der Löschung die Einschränkung der Datenverarbeitung verlangen.</p>
                    </li>
                    <li>
                        <p className="mb-5">Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung,
                            Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der
                            Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</p>
                    </li>
                    <li>
                        <p className="mb-5">Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen
                            Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen
                            überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten
                            zu verlangen.</p>
                    </li>
                </ul>
                <p className="mb-5">Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von
                    ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder
                    Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder
                    juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder
                    eines Mitgliedstaats verarbeitet werden.</p>
            </div>
        </div>
    )
}