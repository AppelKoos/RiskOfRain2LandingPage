import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import MainNavigation from './shared/Navigation/MainNavigation'
import TopLogo from './components/Content/TopLogo/TopLogo';
import Roadmap from './components/Content/Roadmap/roadmap';
import About from './components/Content/About/about';
import Gallery from './components/Content/Gallery/gallery';
import Trailer from './components/Content/Trailer/Trailer'
import Footer from './components/Content/Footer/footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainNavigation />
        <TopLogo />
        <Roadmap />
        <About />
        <Gallery />
        <Trailer />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
