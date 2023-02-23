import '../index.css';

import logo from '../assets/logo/LOGO-02.png';
import First from '../navbar/First.js';
import Second from '../navbar/Second.js';
import Dienste from '../landing/Dienste.js';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Outlet, Link } from "react-router-dom";

import Header from './Header.js';
import Footer from '../footer/Footer.js';

export default function Navigation() {
  return (
    <>
        <Header/>
        <main className="">
            <Outlet/>
        </main>
        <Footer/>
    </>
  )
}

