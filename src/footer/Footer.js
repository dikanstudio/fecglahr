import '../index.css';

import logo from '../assets/logo/LOGO-02.png';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Outlet, Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="">
      <div className="hidden 2xl:block xl:block lg:block">
        <div className="bg-white shadow-md">
          <div className="px-9">
            <div className="flex flex-row space-x-9 justify-center py-9">
              <div className="">
                <h1 className="font-bold pb-2 border-b-2 border-b-black">Standorte</h1>
                <p className="font-semibold pt-2">Gemeindehaus</p>
                <p className="">Hans-Inderfurth-Str. 11</p>
                <p className="">77933 Lahr</p>
                <p className="font-semibold pt-2">Rehabilitation & gGmbH</p>
                <p className="">Ernethof 1</p>
                <p className="">77933 Lahr</p>
              </div>
              <div className="">
                <h1 className="font-bold pb-2 border-b-2 border-b-black">Rechtliches</h1>
                <Link to="impressum">
                  <p className="font-semibold pt-2">Impressum</p>
                </Link>
                <Link to="datenschutz">
                  <p className="font-semibold pt-2">Datenschutz</p>
                </Link>
                {/* <Link to="kontakt">
                  <p className="font-semibold pt-2">Kontakt</p>
                </Link> */}
              </div>
              <div className="grow">
              </div>
              <div className="">
                <h1 className="font-bold pb-2 border-b-2 border-b-black">Social Media</h1>
                <a href="https://www.youtube.com/@Betesdalahr" target="_blank">
                  <p className="font-semibold pt-2">YouTube</p>
                </a>
                <a href="https://www.instagram.com/fecglahr/?hl=de" target="_blank">
                  <p className="font-semibold pt-2">Instagram</p>
                </a>
              </div>
              <div className="flex flex-col">
                <div className="flex justify-center">
                  <img src={logo} className="w-20"></img>
                </div>
                <div className="flex justify-center">
                  <h1 className="font-light pb-2 border-b-2 border-b-black">Freie Evangeliums Christen Gemeinde Lahr</h1>
                </div>
                <div className="flex justify-center">
                  <h1 className="font-extralight pt-5 italic">" […] Bis hierher hat uns der HERR geholfen."</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block 2xl:hidden xl:hidden lg:hidden">
        <div className="bg-white shadow-md">
          <div className="px-9">
            <div className="flex flex-col space-y-11 justify-center py-9">
              <div className="">
                <h1 className="font-bold pb-2 border-b-2 border-b-black">Standorte</h1>
                <p className="font-semibold pt-2">Gemeindehaus</p>
                <p className="">Hans-Inderfurth-Str. 11</p>
                <p className="">77933 Lahr</p>
                <p className="font-semibold pt-2">Rehabilitation & gGmbH</p>
                <p className="">Ernethof 1</p>
                <p className="">77933 Lahr</p>
              </div>
              <div className="">
                <h1 className="font-bold pb-2 border-b-2 border-b-black">Rechtliches</h1>
                <Link to="impressum">
                  <p className="font-semibold pt-2">Impressum</p>
                </Link>
                <Link to="datenschutz">
                  <p className="font-semibold pt-2">Datenschutz</p>
                </Link>
                {/* <Link to="kontakt">
                  <p className="font-semibold pt-2">Kontakt</p>
                </Link> */}
              </div>
              <div className="grow">
              </div>
              <div className="">
                <h1 className="font-bold pb-2 border-b-2 border-b-black">Social Media</h1>
                <a href="https://www.youtube.com/@Betesdalahr" target="_blank">
                  <p className="font-semibold pt-2">YouTube</p>
                </a>
                <a href="https://www.instagram.com/fecglahr/?hl=de" target="_blank">
                  <p className="font-semibold pt-2">Instagram</p>
                </a>
              </div>
              <div className="flex flex-col pt-10">
                <div className="flex justify-left">
                  <img src={logo} className="w-20"></img>
                </div>
                <div className="flex justify-left">
                  <h1 className="font-light pb-2 border-b-2 text-left border-b-black">Freie Evangeliums Christen Gemeinde Lahr</h1>
                </div>
                <div className="flex justify-left">
                  <h1 className="font-extralight pt-5 italic text-left">" […] Bis hierher hat uns der HERR geholfen."</h1>
                </div>
              </div>
              <div className="flex flex-col"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

