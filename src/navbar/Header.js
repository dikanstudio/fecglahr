import '../index.css';

import logo from '../assets/logo/LOGO-02.png';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Outlet, Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header sticky top-0 bg-white shadow-md flex items-center justify-between px-8 py-02 z-40">
        <div class="flex lg:flex-1">
        <Link to="/" className="-m-1.5 p-1.5 flex items-center">
            <span class="sr-only">Your Company</span>
            <img class="h-12 w-auto" src={logo} alt=""/>
            <h1 className="text-2xl p-2 font-light">FECG Lahr</h1>
        </Link>
        </div>
        <nav className="nav font-semibold text-lg">
            <ul className="flex items-center space-x-5">
                <li className="m-5 border-b-2 border-sky-500 border-opacity-0 hover:border-opacity-100 hover:text-sky-500 duration-200 cursor-pointer">
                    <Link to="/dienste">Dienste</Link>
                </li>
                <li className="m-5 border-b-2 border-sky-500 border-opacity-0 hover:border-opacity-100 hover:text-sky-500 duration-200 cursor-pointer">
                    <a href="#">Rehabilitation</a>
                </li>
                <li className="m-5 border-b-2 border-sky-500 border-opacity-0 hover:border-opacity-100 hover:text-sky-500 duration-200 cursor-pointer">
                    <a href="#">gGmbH</a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

