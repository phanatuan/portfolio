import React from 'react';
import Nav from './Nav';
import Portfolio from './Portfolio';
import Footer from './Footer';
import Intro from './Intro';
import Contact from './Contact';
import './App.css';



const App = ()  => {
  return (
    <div className="container-fluid p-0">
      <Nav />
      <Intro />
      <div className="divider my-4 py-4"></div>
      <Portfolio />
      <Contact/>
      <div className="divider my-4"></div>
      <Footer />
      <div className='to-top'>
        <span><a href='#top'><i className="material-icons text-white pt-2 pl-2">arrow_upward</i></a></span> 
      </div>


      


    </div>
  );
}

export default App;
