import './App.css';
import Navigation from './navbar/Navigation.js';
import Presentation from './landing/Presentation.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dienste from './landing/Dienste';
import Ansprechpartner from './landing/Ansprechpartner';
import Termine from './landing/Termine';
import Rehabilitation from './landing/Rehabilitation';
import Dienstag from './landing/gottesdienste/Dienstag.js';
import Donnerstag from './landing/gottesdienste/Donnerstag.js';
import Freitag from './landing/gottesdienste/Freitag.js';
import Sonntag from './landing/gottesdienste/Sonntag.js';
import Impressum from './landing/Impressum.js';
import Datenschutz from './landing/Datenschutz.js';
import Kontakt from './landing/Kontakt.js';

import { useState, useEffect } from 'react'

export default function App() {

  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  useEffect(() => {
    const resize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', resize)
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Presentation />} />
        <Route path="dienste" element={<Dienste />} />
        <Route path="dienste/dienstag" element={<Dienstag />} />
        <Route path="dienste/donnerstag" element={<Donnerstag />} />
        <Route path="dienste/freitag" element={<Freitag />} />
        <Route path="dienste/sonntag" element={<Sonntag />} />
        <Route path="ansprechpartner" element={<Ansprechpartner />} />
        <Route path="rehabilitation" element={<Rehabilitation />} />
        <Route path="termine" element={<Termine />} />
        <Route path="impressum" element={<Impressum />} />
        <Route path="datenschutz" element={<Datenschutz />} />
        <Route path="kontakt" element={<Kontakt />} />
      </Route>
    </Routes>
  )
}

