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

import BetesdaLogo from '../assets/reha/betesdaLogo.jpg';
import BuildingView from '../assets/reha/buildingView.jpg';

export default function Rehabilitation() {

    const first = batch(Sticky(), Fade(), MoveOut(0, -200));
    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
    const FadeUp = batch(Fade(), Move(), Sticky());

    return (
        <ScrollContainer className='bg-gradient-to-r from-slate-100 to-slate-50'>
            <ScrollPage>
                <Animator animation={batch(Fade(), Sticky(), MoveOut(1000, 0))}>
                    <div className="w-screen">
                        <div className="relative">
                            <img src={BetesdaLogo} className=""></img>
                            <div className="absolute inset-x-0 bottom-0">
                                <div className="m-10 pb-10">
                                    <div className="grid grid-cols-1">
                                        <div className="bg-white rounded-lg p-10 shadow-lg bg-opacity-80 border-gray-500 border-2">
                                            <h1 className="text-2xl border-b-2 border-black mb-5">Rehabilitation</h1>
                                            <p className="text-justify mb-5">Die christliche Rehabilitation "Betesda" ist ein ganzheitlicher Ansatz zur Wiedereingliederung von straffällig gewordenen Personen in die Gesellschaft. Es geht dabei nicht nur um die Unterstützung bei der Bewältigung von Suchtproblemen oder der Vermittlung von Arbeit, sondern auch um die Förderung des Glaubens und der Fürsorge für Strafgefangene und ehemalige Strafgefangene.</p>
                                            <p className="text-justify mb-5">Eine zentrale Rolle spielt dabei die Bereitstellung von Unterkunft und Verpflegung in Form von Wohngemeinschaften. Hier können die Bewohner von regelmäßiger Seelsorge und Arbeitstherapie profitieren, um ihre psychischen und emotionalen Probleme zu bewältigen und eine positive Einstellung zu entwickeln.</p>
                                            <p className="text-justify mb-5">Die Unterstützung bei der Eingliederung in die Arbeitswelt ist ein weiterer wichtiger Aspekt. Hierbei werden gezielte Maßnahmen ergriffen, um den ehemaligen Strafgefangenen eine berufliche Perspektive zu bieten. Freizeitangebote und kulturelle Aktivitäten tragen dazu bei, das Selbstbewusstsein zu stärken und ein positives soziales Umfeld zu schaffen.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Animator>
            </ScrollPage>
            <ScrollPage>
                <Animator animation={batch(MoveIn(-3000,0), Sticky(), MoveOut(3000, 0))}>
                    <div className="w-screen">
                        <div className="relative">
                            <img src={BuildingView} className=""></img>
                            <div className="absolute inset-x-0 bottom-0">
                                <div className="m-10 pb-10">
                                    <div className="grid grid-cols-3 gap-4">
                                        <div></div>
                                        <div></div>
                                        <div className="bg-slate-50 rounded-lg p-10 shadow-lg border-gray-500 border-2">
                                            <p className="text-justify mb-3">Darüber hinaus wird auch präventive Hilfe durch geeignete Angebote der Jugend- und Bildungsarbeit angeboten. Hierdurch sollen junge Menschen in schwierigen sozialen Situationen unterstützt und präventive Maßnahmen gegen Kriminalität und Sucht ergriffen werden. Insgesamt bietet die christliche Rehabilitation einen ganzheitlichen Ansatz zur Wiederherstellung von individuellem Wohlbefinden und sozialer Integration.</p>
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