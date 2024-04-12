import "../index.css";

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
  Move,
} from "react-scroll-motion";

import Pic1 from "../assets/persons/_example/pic1.jpg";

import Card from "../components/card/Card.js";

import BetesdaLogo from "../assets/reha/betesdaLogo.jpg";
import BuildingView from "../assets/reha/buildingView.jpg";
import WoodView from "../assets/reha/woodView.jpg";

export default function Rehabilitation() {
  const first = batch(Sticky(), Fade(), MoveOut(0, -200));
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());

  return (
    <div className="">
      <div className="hidden 2xl:block xl:block lg:block">
        <ScrollContainer className="bg-gradient-to-r from-slate-100 to-slate-50">
          <ScrollPage>
            <Animator
              animation={batch(MoveIn(0, 1000), Sticky(), MoveOut(0, -1000))}
            >
              <div className="w-screen">
                {/*<img src={BetesdaLogo} className=""></img>*/}
                <h1 className="text-8xl mb-10 text-center">Rehabilitation</h1>
                <h1 className="text-4xl mb-10 text-center">Betesda-Lahr</h1>
                <div className="grid grid-cols-3 gap-10 m-10">
                  <div className="bg-white p-5 rounded-md drop-shadow-md justify-evenly">
                    <div className="flex justify-center mb-7 mt-7">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-12 h-12"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                        />
                      </svg>
                    </div>
                    <p className="text-justify">
                      Die christliche Rehabilitation "Betesda" ist ein
                      ganzheitlicher Ansatz zur Wiedereingliederung von
                      straffällig gewordenen Personen in die Gesellschaft. Es
                      geht dabei nicht nur um die Unterstützung bei der
                      Bewältigung von Suchtproblemen oder der Vermittlung von
                      Arbeit, sondern auch um die Förderung des Glaubens und der
                      Fürsorge für Strafgefangene und ehemalige Strafgefangene.
                    </p>
                  </div>
                  <div className="bg-white p-5 rounded-md drop-shadow-md">
                    <div className="flex justify-center mb-7 mt-7">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-12 h-12"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                        />
                      </svg>
                    </div>
                    <p className="text-justify">
                      Eine zentrale Rolle spielt dabei die Bereitstellung von
                      Unterkunft und Verpflegung in Form von Wohngemeinschaften.
                      Hier können die Bewohner von regelmäßiger Seelsorge und
                      Arbeitstherapie profitieren, um ihre psychischen und
                      emotionalen Probleme zu bewältigen und eine positive
                      Einstellung zu entwickeln.
                    </p>
                  </div>
                  <div className="bg-white p-5 rounded-md drop-shadow-md">
                    <div className="flex justify-center mb-7 mt-7">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-12 h-12"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
                        />
                      </svg>
                    </div>
                    <p className="text-justify ">
                      Die Unterstützung bei der Eingliederung in die Arbeitswelt
                      ist ein weiterer wichtiger Aspekt. Hierbei werden gezielte
                      Maßnahmen ergriffen, um den ehemaligen Strafgefangenen
                      eine berufliche Perspektive zu bieten. Freizeitangebote
                      und kulturelle Aktivitäten tragen dazu bei, das
                      Selbstbewusstsein zu stärken und ein positives soziales
                      Umfeld zu schaffen.
                    </p>
                  </div>
                </div>
              </div>
            </Animator>
          </ScrollPage>
          <ScrollPage>
            <Animator
              animation={batch(MoveIn(0, 1000), Sticky(), MoveOut(0, -1000))}
            >
              <div className="w-screen">
                <img src={BetesdaLogo} className=""></img>
              </div>
            </Animator>
          </ScrollPage>
          <ScrollPage>
            <Animator
              animation={batch(MoveIn(0, 1000), Sticky(), MoveOut(0, -1000))}
            >
              <div className="w-screen">
                <div className="grid grid-cols-2 gap-10 m-10">
                  <p className="text-justify bg-white p-5 rounded-md drop-shadow-md">
                    Darüber hinaus wird auch präventive Hilfe durch geeignete
                    Angebote der Jugend- und Bildungsarbeit angeboten. Hierdurch
                    sollen junge Menschen in schwierigen sozialen Situationen
                    unterstützt und präventive Maßnahmen gegen Kriminalität und
                    Sucht ergriffen werden. Insgesamt bietet die christliche
                    Rehabilitation einen ganzheitlichen Ansatz zur
                    Wiederherstellung von individuellem Wohlbefinden und
                    sozialer Integration.
                  </p>
                </div>
              </div>
            </Animator>
          </ScrollPage>
          <ScrollPage>
            <Animator
              animation={batch(MoveIn(0, 1000), Sticky(), MoveOut(0, -1000))}
            >
              <div className="w-screen">
                <h1 className="text-5xl text-center">gGmbH</h1>
              </div>
            </Animator>
          </ScrollPage>
        </ScrollContainer>
      </div>

      <div className="2xl:hidden xl:hidden lg:hidden block">
        <ScrollContainer className="bg-gradient-to-r from-slate-100 to-slate-50">
          <ScrollPage>
            <Animator
              animation={batch(MoveIn(0, 1000), Sticky(), MoveOut(0, -1000))}
            >
              <div className="w-screen">
                {/*<img src={BetesdaLogo} className=""></img>*/}
                <h1 className="text-8xl mb-10 text-center">Rehabilitation</h1>
                <h1 className="text-4xl mb-10 text-center">Betesda-Lahr</h1>
              </div>
            </Animator>
          </ScrollPage>
          <ScrollPage>
            <Animator
              animation={batch(MoveIn(0, 1000), Sticky(), MoveOut(0, -1000))}
            >
              <div className="w-screen">
                <div className="m-5">
                  <div className="bg-white rounded-md shadow-md flex flex-col justify-evenly">
                  <div className="pb-5">
                    <img src={BetesdaLogo} className="rounded-md"></img>
                  </div>
                    <div className="flex justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-10 h-10"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                        />
                      </svg>
                    </div>
                    <p className="text-justify pt-2 p-5">
                      Die christliche Rehabilitation <p className="font-bold inline">"Betesda"</p> ist ein
                      ganzheitlicher Ansatz zur Wiedereingliederung von
                      straffällig gewordenen Personen in die Gesellschaft. Es
                      geht dabei nicht nur um die Unterstützung bei der
                      Bewältigung von Suchtproblemen oder der Vermittlung von
                      Arbeit, sondern auch um die Förderung des Glaubens und der
                      Fürsorge für Strafgefangene und ehemalige Strafgefangene.
                    </p>
                    <div className="flex justify-center mt-3"></div>
                  </div>
                </div>
              </div>
            </Animator>
          </ScrollPage>
          <ScrollPage>
            <Animator
              animation={batch(MoveIn(0, 1000), Sticky(), MoveOut(0, -1000))}
            >
              <div className="w-screen">
                <img src={BetesdaLogo} className=""></img>
              </div>
            </Animator>
          </ScrollPage>
        </ScrollContainer>
      </div>
    </div>
  );
}
