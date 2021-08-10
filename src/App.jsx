import React, { useState } from 'react';
import './app.scss';
// import Navigation from './components/Navigation';
import Topbar from "./components/Topbar/Topbar";
import About from "./components/About/About";
import Resume from './components/Resume/Resume';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


function App() {

  return (
    <div className="app">
      <Topbar></Topbar>
      <div className="sections">
        <About></About>
        <Portfolio></Portfolio>
        <Contact></Contact>
        <Resume></Resume>
        <Footer></Footer>  
      </div>
      <div className="footer">
      <Footer></Footer>  
      </div>
      </div>  
  )
}

export default App;
