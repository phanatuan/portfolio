import React from 'react';
import Nav from './Nav';
import Portfolio from './Portfolio';
import Footer from './Footer';
import Intro from './Intro';
import Contact from './Contact';



const App = ()  => {
  return (
    <div className="container-fluid">
      <Nav />
      <Intro />
      <Portfolio />
      <Contact/>
      <Footer />
      


    </div>
  );
}

export default App;
