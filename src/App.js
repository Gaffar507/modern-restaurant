import React from 'react';
import {Navbar} from './components'
import {AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu, NewsLetter} from './container/index'
import './App.css';

const App = () => {
  return (
    <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <NewsLetter/>
    <Footer />
    </div>
  )
}

export default App

