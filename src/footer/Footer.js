import '../index.css';

import logo from '../assets/logo/LOGO-02.png';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Outlet, Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-white">
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
            <p className="font-semibold pt-2">Impressum</p>
            <p className="font-semibold pt-2">Datenschutz</p>
            <p className="font-semibold pt-2">Kontakt</p>
          </div>
          <div className="grow">
          </div>
          <div className="">
            <h1 className="font-bold pb-2 border-b-2 border-b-black">Social Media</h1>
            <p className="font-semibold pt-2">YouTube</p>
            <p className="font-semibold pt-2">Instagram</p>
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
  )
}

