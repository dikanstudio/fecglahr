import '../index.css';

import logo from '../assets/logo/LOGO-02.png';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Outlet, Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header sticky top-0 bg-white shadow-md flex items-center justify-between px-8 py-02 z-40">
        <div class="flex lg:flex-1">
        <div className="hover:shadow-md duration-200 hover:rounded-md">
            <Link to="/" className="-m-1.5 p-1.5 flex items-center">
                <span class="sr-only">Your Company</span>
                <img class="h-12 w-auto" src={logo} alt=""/>
                <h1 className="text-2xl p-2 font-light duration-200 hover:text-blue-500">FECG Lahr</h1>
            </Link>

        </div>
        </div>
        <nav className="nav font-semibold text-lg">
            <ul className="flex items-center space-x-5">
                <li className="p-5 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 duration-200 cursor-pointer">
                    <Link to="/dienste">Dienste</Link>
                </li>
                <li className="p-5 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 duration-200 cursor-pointer">
                    <Link to="/rehabilitation">Ansprechpartner</Link>
                </li>
                <li className="p-5 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 duration-200 cursor-pointer">
                    <Link to="/gGmbh">Rehabilitation & gGmbH</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

