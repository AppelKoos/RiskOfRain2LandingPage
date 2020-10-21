import React from 'react';
import './App.css';

import Header from './components/Content/MainHeader/header';
import Buylinks from './components/Content/BuyLinks/buylinks';
import Roadmap from './components/Content/Roadmap/roadmap';
import About from './components/Content/About/about';
import Gallery from './components/Content/Gallery/gallery';
import Footer from './components/Content/Footer/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Roadmap />
      <About />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
