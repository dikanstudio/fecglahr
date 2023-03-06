import '../index.css';

import logo from '../assets/logo/LOGO-02.png';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Outlet, Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="header sticky top-0 bg-white shadow-md flex items-center justify-between px-8 py-02 z-40">
            <div className="flex lg:flex-1">
                <div className="hover:shadow-md duration-200 hover:rounded-md">
                    <Link to="/" className="-m-1.5 p-1.5 flex items-center">
                        <span className="sr-only">FECG LAHR</span>
                        <img className="h-12 w-auto" src={logo} alt="" />
                        <h1 className="text-4xl subpixel-antialiased tracking-wider p-2 font-light duration-500 hover:tracking-widest">FECG LAHR</h1>
                    </Link>

                </div>
            </div>
            <nav className="nav font-semibold text-lg">
                <ul className="flex items-center space-x-5">
                    <Link to="/dienste">
                        <li className="p-5 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 transition duration-500 cursor-pointer">
                            Dienste
                        </li>
                    </Link>
                    <Link to="/ansprechpartner">
                        <li className="p-5 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 transition duration-500 cursor-pointer">
                            Ansprechpartner
                        </li>
                    </Link>
                    <Link to="/rehabilitation">
                        <li className="p-5 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 transition duration-500 cursor-pointer">
                            Rehabilitation & gGmbH
                        </li>
                    </Link>
                    <Link to="/termine">
                        <li className="p-5 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 transition duration-500 cursor-pointer">
                            Termine
                        </li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}

