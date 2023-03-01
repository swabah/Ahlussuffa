import React from "react";
import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Layout from "./components/Layout";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Library from "./pages/Library";
import PreMessege from "./pages/PreMessege";
import Committee from "./pages/Committee";
import Asathida from "./pages/Asathida";
import Services from "./pages/Services";
import Events from "./pages/Events";
import Gallary from "./pages/Gallary";
import QiuckContact from "./pages/QiuckContact";
import {AnimatePresence} from 'framer-motion'

function App() {
  return <>
  <AnimatePresence>
  <Router>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index path="/" element={<Home/>} />
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/library" element={<Library/>}/>
        <Route path="/Services" element={<Services/>}/>
        <Route path="/Event" element={<Events/>}/>
        <Route path="/PreMessege" element={<PreMessege/>}/>
        <Route path="/Committee" element={<Committee/>}/>
        <Route path="/Asathida" element={<Asathida/>}/>
        <Route path="/gallery" element={<Gallary/>}/>
        <Route path="/QiuckContact" element={<QiuckContact/>}/>
      </Route>
    </Routes>
  </Router>
  </AnimatePresence>
  </>;
}

export default App;
