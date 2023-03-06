import './App.css';
import Navigation from './navbar/Navigation.js';
import Presentation from './landing/Presentation.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dienste from './landing/Dienste';
import Ansprechpartner from './landing/Ansprechpartner';
import Termine from './landing/Termine';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Presentation />} />
        <Route path="/dienste" element={<Dienste/>} />
        <Route path="/ansprechpartner" element={<Ansprechpartner/>} />
        <Route path="/termine" element={<Termine />} />
      </Route>
    </Routes>
  )
}

