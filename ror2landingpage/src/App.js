import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import Header from './components/Content/MainHeader/header';
import Roadmap from './components/Content/Roadmap/roadmap';
import About from './components/Content/About/about';
import Gallery from './components/Content/Gallery/gallery';
import Footer from './components/Content/Footer/footer';
import MainNavigation from './shared/Navigation/MainNavigation'

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainNavigation />
      </BrowserRouter>
      <Header />
      <Roadmap />
      <About />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
