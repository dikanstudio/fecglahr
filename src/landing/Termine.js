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

export default function Termine() {

    const first = batch(Sticky(), Fade(), MoveOut(0, -200));
    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
    const FadeUp = batch(Fade(), Move(), Sticky());

    return (
        <div className="">
            <div className="bg-slate-100 p-10">
                <div className="flex space-x-6 justify-center">
                    <ol className="border-l-2 border-primary border-blue-500">
                        <li>
                            <div className="flex-start flex items-center">
                                <div
                                    className="-ml-[9px] mr-3 -mt-2 flex h-4 w-4 items-center justify-center rounded-full bg-blue-500">
                                </div>
                                <h4 className="-mt-2 text-xl font-semibold">Jugendkonferenz 2023</h4>
                            </div>
                            <div className="ml-6 mb-6 pb-6">
                                <p className="text-sm text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600">
                                18. März 2023
                                </p>
                                <p className="mt-2 mb-4 text-gray-700">
                                Unsere Jugendkonferenz dreht sich um das inspirierende biblische Zitat aus Jesaja 40:29 "Er gibt dem Müden Kraft und Stärke genug dem Unvermögenden". Wir werden uns intensiv mit den Herausforderungen und Schwierigkeiten beschäftigen, denen Jugendliche im Gemeindeleben begegnen. Gemeinsam wollen wir nach Wegen suchen, um diese Hindernisse zu überwinden und die Jugendlichen zu befähigen, ihre Potenziale voll auszuschöpfen. Seien Sie dabei, wenn wir uns auf diesen wichtigen Weg begeben!
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="flex-start flex items-center">
                                <div
                                    className="-ml-[9px] mr-3 -mt-2 flex h-4 w-4 items-center justify-center rounded-full bg-blue-500">
                                </div>
                                <h4 className="-mt-2 text-xl font-semibold">Ausflug der Jungschar Gruppe</h4>
                            </div>
                            <div className="ml-6 mb-6 pb-6">
                                <p className="text-sm text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600">
                                28. April 2023 - 01. Mai 2023
                                </p>
                                <p className="mt-2 mb-4 text-gray-700">
                                Unser bevorstehender Ausflug der Jugendschar vom 28. April bis 01. Mai ist darauf ausgerichtet, die Gemeinschaft mit Gott und Christen zu stärken. Wir werden uns auf eine Reise begeben, die uns näher an den Glauben führen soll und uns helfen wird, unsere Beziehung zu Gott zu vertiefen. In diesem Zeitraum werden wir uns intensiv mit dem Thema Gemeinschaft auseinandersetzen und uns auf kreative Weise mit anderen Christen verbinden. Wir freuen uns auf eine tolle Zeit mit den Teens, die uns ermöglichen wird, uns geistig zu erneuern und uns auf die Wichtigkeit der Gemeinschaft mit Gott und anderen Christen zu besinnen.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="flex-start flex items-center">
                                <div
                                    className="-ml-[9px] mr-3 -mt-2 flex h-4 w-4 items-center justify-center rounded-full bg-blue-500">
                                </div>
                                <h4 className="-mt-2 text-xl font-semibold">Kindercamp 2023</h4>
                            </div>
                            <div className="ml-6 mb-6 pb-6">
                                <p className="text-sm text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600">
                                30. Juli 2023 - 04. August 2023
                                </p>
                                <p className="mt-2 mb-4 text-gray-700">
                                Unser Kindercamp vom 30. Juli bis zum 04. August dreht sich um das spannende Thema "David - Ein Mann nach dem Herzen Gottes". Wir wollen mit den Kindern auf Entdeckungsreise gehen und die beeindruckende Lebensgeschichte von David kennenlernen. Neben vielen actionreichen und abenteuerlichen Spielen und Stationen werden wir uns auch mit der Bibel beschäftigen und uns intensiv mit der Frage auseinandersetzen, was es bedeutet, ein Mann oder eine Frau nach dem Herzen Gottes zu sein. In den Gottesdiensten werden wir gemeinsam singen, beten und über die Geschichten der Bibel nachdenken. Wir freuen uns auf eine aufregende Woche voller Action, Abenteuer und vor allem auf eine tolle Zeit mit den Kindern!
                                </p>
                            </div>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    )
}