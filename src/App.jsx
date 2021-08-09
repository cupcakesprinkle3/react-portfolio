import React, { useState } from 'react';
import './app.scss';
// import Navigation from './components/Navigation';
import Topbar from "./components/Topbar/Topbar";
import About from "./components/About/About";
import Resume from './components/Resume/Resume';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  // const [navigations] = useState([
  //   {
  //     name: 'About me',
  //     description: 'Michelle Brinich bio',
  //   },
  //   { name: 'Portfolio', description: 'Work portfolio' },
  //   { name: 'Contact', description: 'Contact me' },
  //   { name: 'Resume', description: 'Download or view resume' },
  // ]);

  // const [currentNav, setCurrentNav] = useState(navigations[0]);

  return (
    <div className="app">
      <Topbar></Topbar>
      <div className="sections">
      <About></About>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <Resume></Resume>
      </div>
              
      
      
    </div>
  );
}

export default App;
