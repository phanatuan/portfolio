import React from "react";
import Portfolio from "./Portfolio";
import Intro from "./Intro";
import Contact from "./Contact";
import "./App.css";

const MainPage = () => {
  return (
    <div className='container-fluid p-0'>
      <Intro />
      <div className='divider my-4 py-4' />
      <Portfolio />
      <Contact />
      <div className='divider my-4' />
      <div className='to-top'>
        <span>
          <a href='#top'>
            <i className='material-icons text-white pt-2 pl-2'>arrow_upward</i>
          </a>
        </span>
      </div>
    </div>
  );
};

export default MainPage;
