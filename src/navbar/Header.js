import "../index.css";

import logo from "../assets/logo/LOGO-02.png";

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header 2xl:sticky 2xl:top-0 xl:sticky xl:top-0 lg:sticky lg:top-0 fixed bottom-0 inset-x-0 bg-white shadow-md flex items-center justify-between px-8 py-02 z-40">
      <div className="flex 2xl:p-0 xl:p-0 lg:p-0 p-2">
        <div className="hover:shadow-md duration-200 hover:rounded-md">
          <Link to="/" className="flex items-center">
            <img
              className="2xl:h-12 xl:h-12 lg:h-12 h-10 w-auto"
              src={logo}
              alt=""
            />
            <h1 className="2xl:text-4xl xl:text-4xl lg:text-4xl text-2xl subpixel-antialiased tracking-wider p-2 font-light duration-500 hover:tracking-widest whitespace-nowrap">
              FECG LAHR
            </h1>
          </Link>
        </div>
      </div>

      <nav className="nav font-semibold text-md block 2xl:hidden xl:hidden lg:hidden">
        {/*<svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
  </svg>*/}
        <Link to="/Rehabilitation">
          <a className="p-5 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 transition duration-500 cursor-pointer">
            Rehabilitation
          </a>
        </Link>
      </nav>

      <nav className="nav font-semibold text-lg hidden 2xl:block xl:block lg:block">
        <ul className="flex items-center space-x-5">
          <Link to="/Rehabilitation">
            <li className="p-5 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 transition duration-500 cursor-pointer">
              Rehabilitation
            </li>
          </Link>
          {/* <Link to="/dienste">
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
                    </Link> */}
        </ul>
      </nav>
    </div>
  );
}
