import "../index.css";

import logo from "../assets/logo/LOGO-02.png";

import { Link } from "react-router-dom";

import { useState, useRef } from "react";

export default function Header() {
  const navbarRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log("Toggle");
    setMenuOpen(!menuOpen);
  };

  return (
    <div
      ref={navbarRef}
      className="header 2xl:sticky 2xl:top-0 xl:sticky xl:top-0 lg:sticky lg:top-0 fixed bottom-0 inset-x-0 bg-white shadow-md flex items-center justify-between px-8 py-02 z-40"
    >
      {menuOpen && (
        <div
          className="absolute bottom-0 right-0 bg-white p-4 rounded w-screen h-screen z-0 border-b-4"
          style={{ bottom: `${navbarRef.current.clientHeight}px` }}
        >
          {/* Hier können die Links für die Unterseiten platziert werden */}
          <div className="absolute bottom-0 right-0 flex flex-col gap-5 text-right pb-5 pr-5">
            <p className="border-b-2 p-5 text-lg">Navigation</p>
            <div className="flex flex-row pr-5">
              <Link to="/Rehabilitation">
                <a
                  onClick={() => setMenuOpen(false)}
                  className="p-5 text-base border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 transition duration-500 cursor-pointer"
                >
                  Rehabilitation
                </a>
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
            </div>
          </div>
        </div>
      )}
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-8 h-8"
          onClick={toggleMenu}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        {/* <Link to="/rehabilitation">
            <a className="p-5 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 transition duration-500 cursor-pointer">
              Rehabilitation
            </a>
          </Link> */}
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
