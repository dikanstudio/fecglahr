import '../index.css';

import logo from '../assets/logo/LOGO-02.png';
import First from '../navbar/First.js';

export default function Navigation() {
  return (
    <div className="header sticky top-0 bg-white shadow-md flex items-center justify-between px-8 py-02 z-40">
        
        <div class="flex lg:flex-1">
            <a href="#" class="-m-1.5 p-1.5 flex items-center">
                <span class="sr-only">Your Company</span>
                <img class="h-12 w-auto" src={logo} alt=""/>
                <h1 className="text-2xl p-2 font-light">FECG Lahr</h1>
            </a>
        </div>
        <nav className="nav font-semibold text-lg">
            <ul className="flex items-center">
                <li className="p-4 border-b-2 border-sky-500 border-opacity-0 hover:border-opacity-100 hover:text-sky-500 duration-200 cursor-pointer active">
                    <a href="#"><First/></a>
                </li>
                <li className="p-4 border-b-2 border-sky-500 border-opacity-0 hover:border-opacity-100 hover:text-sky-500 duration-200 cursor-pointer">
                    <a href="#">Kinderstunden</a>
                </li>
                <li className="p-4 border-b-2 border-sky-500 border-opacity-0 hover:border-opacity-100 hover:text-sky-500 duration-200 cursor-pointer">
                    <a href="#">Jungschar</a>
                </li>
                <li className="p-4 border-b-2 border-sky-500 border-opacity-0 hover:border-opacity-100 hover:text-sky-500 duration-200 cursor-pointer">
                    <a href="#">Jugend</a>
                </li>
                <li className="p-4 border-b-2 border-sky-500 border-opacity-0 hover:border-opacity-100 hover:text-sky-500 duration-200 cursor-pointer">
                    <a href="#">Rehabilitation</a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

