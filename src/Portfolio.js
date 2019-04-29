import React from "react";

const Portfolio = () => {
  return (
    <div className='container-fluid'>
      <h2 className='text-center mb-4'>Portfolio</h2>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <div className='card'>
              <div className='card-header card-header-danger'>
                <h4 className='card-title'>Google News</h4>
                <p className='category'>Built with Vanilla JS, HTML, CSS</p>
              </div>
              <div className='card-body'>
              <h4>User Stories</h4>
              <ul>
                  <li>Fetch latest news article using Fetch API</li>
                  <li>Build Filter Suite. Load</li>
                  <li>More Function.</li>
              </ul>
                <a href="https://google-news.netlify.com/" class="btn btn-primary">Check It Out</a>
              </div>
            </div>
          </div>
          <div className='col-6'>
            <div className='card'>
              <div className='card-header card-header-danger'>
                <h4 className='card-title'>Full header coloured</h4>
                <p className='category'>Category subtitle</p>
              </div>
              <div className='card-body'>
                The place is close to Barceloneta Beach and bus stop just 2 min
                by walk and near to "Naviglio" where you can enjoy the main
                night life in Barcelona...
              </div>
            </div>
          </div>
          <div className='col-6'>
            <div className='card'>
              <div className='card-header card-header-danger'>
                <h4 className='card-title'>Google News</h4>
                <p className='category'>Built with Vanilla JS</p>
              </div>
              <div className='card-body'>
                Fetch latest news article using Fetch. Build Filter Suite. Load
                More Function.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
