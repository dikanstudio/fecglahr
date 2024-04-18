import "../index.css";

import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";

import Pic1 from "../assets/persons/_example/pic1.jpg";

import Card from "../components/card/Card.js";

import BetesdaLogo from "../assets/reha/betesdaLogo.jpg";
import BuildingView from "../assets/reha/buildingView.jpg";
import WoodView from "../assets/reha/woodView.jpg";
import Wood from "../assets/reha/wood.jpg";
import Flur from "../assets/reha/flur.jpg";
import Front from "../assets/reha/front.jpg";

export default function Rehabilitation() {
  const first = batch(Sticky(), Fade(), MoveOut(0, -200));
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());

  return (
    <div className="">
      <div className="hidden 2xl:block xl:block lg:block">
        <ScrollContainer className="bg-slate-100">
          <ScrollPage className="">
            <Animator
              animation={batch(MoveIn(0, 1000), Sticky(), MoveOut(0, -1000))}
            >
              <div className="w-screen">
                {/*<img src={BetesdaLogo} className=""></img>*/}
                <div className="pt-10">
                  <h1 className="text-8xl mb-10 text-center">Rehabilitation</h1>
                  <h1 className="text-4xl pb-10 text-center border-b-2">
                    Betesda-Lahr
                  </h1>
                  <div className="flex mt-20 mr-10 ml-10 gap-5">
                    <div className="flex-col w-1/2 p-2">
                      <p className="text-xl text-right">Kontakt und Anfragen</p>
                      <p className="text-2xl text-right font-bold">
                        betesdalahr@fecg-lahr.de
                      </p>
                      <p className="text-xl text-right pt-10">
                        Rehabilitation & gGmbH
                      </p>
                      <p className="text-xl text-right">Ernethof 1</p>
                      <p className="text-xl text-right">77933 Lahr</p>
                    </div>
                    <div className="flex-col w-1/2 border-l-2 p-2">
                      <p className="text-xl text-left pb-4">
                        Willkommen auf unserer Rehabilitationsseite.
                      </p>
                      <p className="text-lg text-left">
                        {" "}
                        Wenn du in einer schwierigen geistlichen, physischen
                        oder emotionalen Lage bist, oder mit Problemen im
                        Zusammenhang mit Drogen- oder Alkoholkonsum kämpfst,
                        bist du nicht allein. Wir sind hier, um dir zu helfen.
                        Du kannst uns unter der Email kontaktieren, um
                        Unterstützung oder Informationen zu erhalten. Egal, ob
                        du Fragen hast oder einfach nur jemanden zum Zuhören
                        brauchst, wir sind für dich da. Unsere Tür steht immer
                        offen. Du verdienst Unterstützung und Verständnis auf
                        deinem Weg zur Genesung. Zögere nicht, uns zu
                        kontaktieren. Wir sind hier, um dich zu unterstützen und
                        zu ermutigen.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Animator>
          </ScrollPage>
          <img src={Front}></img>
          <ScrollPage>
            <Animator
              animation={batch(MoveIn(0, 1000), Sticky(), MoveOut(0, -1000))}
            >
              <div className="w-screen">
                <div class="flex justify-center items-strech pt-40 pb-40">
                  <div className="m-5 flex-col w-1/3">
                    <div className="bg-white rounded-md shadow-md flex flex-col h-full">
                      <div className="pb-5">
                        <img
                          src={BetesdaLogo}
                          className="rounded-md border-4"
                        ></img>
                      </div>
                      <div className="flex justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="w-10 h-10"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                          />
                        </svg>
                      </div>
                      <p className="text-justify text-sm pt-2 p-5">
                        Die christliche Rehabilitation{" "}
                        <p className="font-bold inline">"Betesda"</p> verfolgt
                        einen ganzheitlichen Ansatz, um Menschen, die vor
                        Herausforderungen stehen oder in Konflikt mit dem Gesetz
                        geraten sind, zu unterstützen und präventiv nach §35 zu
                        arbeiten. Unser Ziel ist es, nicht nur bei der
                        Bewältigung von Suchtproblemen zu helfen oder bei der
                        Vermittlung von Arbeit zu unterstützen, sondern auch den
                        Glauben zu stärken und fürsorgliche Begleitung
                        anzubieten. Bei Betesda geht es darum, jedem Einzelnen
                        eine zweite Chance zu geben und sie auf ihrem Weg zur
                        Rehabilitation zu begleiten. Unsere Programme umfassen
                        neben geistlicher und psychischer Unterstützung auch die
                        Möglichkeit, Jesus und sein Leben näher kennenzulernen
                        durch Bibelanalysen und Reflexionen. Wir glauben fest
                        daran, dass ein sinnvolles und erfülltes Leben im
                        Glauben, geprägt von Liebe und ohne Kriminalität,
                        möglich ist. Unsere liebevolle Gemeinschaft bietet dabei
                        Unterstützung und Begleitung auf diesem Weg der
                        persönlichen Entwicklung und des inneren Wachstums.
                      </p>
                      <div className="flex justify-center mt-3"></div>
                    </div>
                  </div>
                  <div className="m-5 flex-col w-1/3">
                    <div className="bg-white rounded-md shadow-md flex flex-col h-full">
                      <div className="pb-5">
                        <img
                          src={BuildingView}
                          className="rounded-md border-4"
                        ></img>
                      </div>
                      <div className="flex justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="w-10 h-10"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                          />
                        </svg>
                      </div>
                      <p className="text-justify pt-2 p-5">
                        Eine zentrale Rolle spielt dabei die Bereitstellung von
                        Unterkunft und Verpflegung in Form von
                        Wohngemeinschaften, die darauf ausgerichtet sind, den
                        Bewohnern eine unterstützende und glaubensbasierte
                        Umgebung zu bieten. Hier können die Bewohner von
                        regelmäßiger Seelsorge und Arbeitstherapie profitieren,
                        um nicht nur ihre psychischen und emotionalen Probleme
                        zu bewältigen, sondern auch eine tiefere geistliche
                        Verbindung zu entwickeln. Wir glauben fest daran, dass
                        die Integration von Glauben und Therapie dazu beiträgt,
                        dass die Menschen eine positive Einstellung entwickeln
                        und ihre Herausforderungen mit Hoffnung und Zuversicht
                        angehen können.
                      </p>
                      <div className="flex justify-center mt-3"></div>
                    </div>
                  </div>
                  <div className="m-5 flex-col w-1/3">
                    <div className="bg-white rounded-md shadow-md flex flex-col h-full">
                      <div className="pb-5">
                        <img src={Wood} className="rounded-md border-4"></img>
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
                            d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
                          />
                        </svg>
                      </div>
                      <p className="text-justify pt-2 p-5">
                        Ein weiterer bedeutender Aspekt unserer Arbeit liegt in
                        der Unterstützung bei der Eingliederung in die
                        Arbeitswelt. Wir setzen gezielte Maßnahmen ein, um den
                        ehemaligen Strafgefangenen eine berufliche Perspektive
                        zu bieten, die auf ihrem persönlichen Wachstum und ihrem
                        Glauben aufbaut. Durch die Förderung von
                        Freizeitangeboten und kulturellen Aktivitäten streben
                        wir danach, das Selbstbewusstsein zu stärken und ein
                        positives soziales Umfeld zu schaffen, das von
                        christlichen Werten geprägt ist. Denn wir glauben fest
                        daran, dass eine sinnvolle berufliche Tätigkeit nicht
                        nur die finanzielle Stabilität fördert, sondern auch
                        dazu beiträgt, dass die Menschen ihre Talente entfalten
                        und einen wertvollen Beitrag zur Gesellschaft leisten
                        können, während sie gleichzeitig ein erfülltes Leben im
                        Glauben führen.
                      </p>
                      <div className="flex justify-center mt-3"></div>
                    </div>
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
                {/*<img src={BetesdaLogo} className=""></img>*/}
                <div className="pt-10">
                  <h1 className="text-8xl mb-10 text-center">gGmbH</h1>
                  <h1 className="text-4xl pb-10 text-center">
                    Infos folgen...
                  </h1>
                </div>
              </div>
            </Animator>
          </ScrollPage>
        </ScrollContainer>
      </div>

      <div className="2xl:hidden xl:hidden lg:hidden block bg-slate-100">
        <div className="w-screen">
          {/*<img src={BetesdaLogo} className=""></img>*/}
          <h1 className="text-6xl mb-10 text-center pt-14">Rehabilitation</h1>
          <h1 className="text-4xl mb-10 text-center">Betesda-Lahr</h1>
          <div className="flex mt-10 mr-5 ml-5 gap-5">
            <div className="flex-col w-1/3 p-2">
              <p className="text-base text-right">Kontakt und Anfragen</p>
              <p className="text-xs text-right font-bold">
                betesdalahr@fecg-lahr.de
              </p>
              <p className="text-base text-right pt-10">
                Rehabilitation & gGmbH
              </p>
              <p className="text-base text-right">Ernethof 1</p>
              <p className="text-base text-right">77933 Lahr</p>
            </div>
            <div className="flex-col w-2/3 border-l-2 p-2">
              <p className="text-lg text-left pb-4">
                Willkommen auf unserer Rehabilitationsseite.
              </p>
              <p className="text-xs text-left">
                {" "}
                Wenn du in einer schwierigen geistlichen, physischen oder
                emotionalen Lage bist, oder mit Problemen im Zusammenhang mit
                Drogen- oder Alkoholkonsum kämpfst, bist du nicht allein. Wir
                sind hier, um dir zu helfen. Du kannst uns unter der Email
                kontaktieren, um Unterstützung oder Informationen zu erhalten.
                Egal, ob du Fragen hast oder einfach nur jemanden zum Zuhören
                brauchst, wir sind für dich da. Unsere Tür steht immer offen. Du
                verdienst Unterstützung und Verständnis auf deinem Weg zur
                Genesung. Zögere nicht, uns zu kontaktieren. Wir sind hier, um
                dich zu unterstützen und zu ermutigen.
              </p>
            </div>
          </div>
        </div>
        <div className="w-screen">
          <div className="m-5 pt-8">
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
                  className="w-10 h-10"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                  />
                </svg>
              </div>
              <p className="text-justify pt-2 p-5">
                Die christliche Rehabilitation{" "}
                <p className="font-bold inline">"Betesda"</p> verfolgt einen
                ganzheitlichen Ansatz, um Menschen, die vor Herausforderungen
                stehen oder in Konflikt mit dem Gesetz geraten sind, zu
                unterstützen und präventiv nach §35 zu arbeiten. Unser Ziel ist
                es, nicht nur bei der Bewältigung von Suchtproblemen zu helfen
                oder bei der Vermittlung von Arbeit zu unterstützen, sondern
                auch den Glauben zu stärken und fürsorgliche Begleitung
                anzubieten. Bei Betesda geht es darum, jedem Einzelnen eine
                zweite Chance zu geben und sie auf ihrem Weg zur Rehabilitation
                zu begleiten. Unsere Programme umfassen neben geistlicher und
                psychischer Unterstützung auch die Möglichkeit, Jesus und sein
                Leben näher kennenzulernen durch Bibelanalysen und Reflexionen.
                Wir glauben fest daran, dass ein sinnvolles und erfülltes Leben
                im Glauben, geprägt von Liebe und ohne Kriminalität, möglich
                ist. Unsere liebevolle Gemeinschaft bietet dabei Unterstützung
                und Begleitung auf diesem Weg der persönlichen Entwicklung und
                des inneren Wachstums.
              </p>
              <div className="flex justify-center mt-3"></div>
            </div>
          </div>
        </div>
        <div className="w-screen">
          <div className="m-5 pt-8">
            <div className="bg-white rounded-md shadow-md flex flex-col justify-evenly">
              <div className="pb-5">
                <img src={BuildingView} className="rounded-md"></img>
              </div>
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
              </div>
              <p className="text-justify pt-2 p-5">
                Eine zentrale Rolle spielt dabei die Bereitstellung von
                Unterkunft und Verpflegung in Form von Wohngemeinschaften, die
                darauf ausgerichtet sind, den Bewohnern eine unterstützende und
                glaubensbasierte Umgebung zu bieten. Hier können die Bewohner
                von regelmäßiger Seelsorge und Arbeitstherapie profitieren, um
                nicht nur ihre psychischen und emotionalen Probleme zu
                bewältigen, sondern auch eine tiefere geistliche Verbindung zu
                entwickeln. Wir glauben fest daran, dass die Integration von
                Glauben und Therapie dazu beiträgt, dass die Menschen eine
                positive Einstellung entwickeln und ihre Herausforderungen mit
                Hoffnung und Zuversicht angehen können.
              </p>
              <div className="flex justify-center mt-3"></div>
            </div>
          </div>
        </div>
        <div className="w-screen">
          <div className="m-5 pt-8">
            <div className="bg-white rounded-md shadow-md flex flex-col justify-evenly">
              <div className="pb-5">
                <img src={Wood} className="rounded-md"></img>
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
                    d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
                  />
                </svg>
              </div>
              <p className="text-justify pt-2 p-5">
                Ein weiterer bedeutender Aspekt unserer Arbeit liegt in der
                Unterstützung bei der Eingliederung in die Arbeitswelt. Wir
                setzen gezielte Maßnahmen ein, um den ehemaligen Strafgefangenen
                eine berufliche Perspektive zu bieten, die auf ihrem
                persönlichen Wachstum und ihrem Glauben aufbaut. Durch die
                Förderung von Freizeitangeboten und kulturellen Aktivitäten
                streben wir danach, das Selbstbewusstsein zu stärken und ein
                positives soziales Umfeld zu schaffen, das von christlichen
                Werten geprägt ist. Denn wir glauben fest daran, dass eine
                sinnvolle berufliche Tätigkeit nicht nur die finanzielle
                Stabilität fördert, sondern auch dazu beiträgt, dass die
                Menschen ihre Talente entfalten und einen wertvollen Beitrag zur
                Gesellschaft leisten können, während sie gleichzeitig ein
                erfülltes Leben im Glauben führen.
              </p>
              <div className="flex justify-center mt-3"></div>
            </div>
          </div>
        </div>
        <div className="w-screen">
          {/*<img src={BetesdaLogo} className=""></img>*/}
          <div className="pt-10">
            <h1 className="text-6xl mb-10 text-center">gGmbH</h1>
            <h1 className="text-4xl pb-10 text-center">Infos folgen...</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
