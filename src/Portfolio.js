import React from "react";
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className='container-fluid'>
      <h1 id='portfolio' className='text-center pt-0 title'>Portfolio</h1>
      <div className='container mt-4 pt-5'>
        <div className='row'>
          <div className='col-lg-6 col-md-12'>
            <div className='card'>
              <div className='card-header card-header-gradient'>
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
                <a href="https://google-news.netlify.com/" className="btn btn-primary mr-2">Live Demo</a>
                <a href="https://github.com/phanatuan/google-news" className="btn btn-danger">View on Github</a>
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-md-12'>
            <div className='card'>
              <div className='card-header card-header-gradient'>
                <h4 className='card-title'>Mega Movies</h4>
                <p className='category'>Built with React, API, Bootstrap</p>
              </div>
              <div className='card-body'>
                <h4>User Stories:</h4>
                <ul>
                    <li>Fetch API from TheMovieDB</li>
                    <li>Search Movie by Name</li>
                    <li>Filter by Rating, Popularity, Year</li>
                </ul>
                <a href="https://mega-movies.netlify.com/" className="btn btn-primary mr-2">Live Demo</a>
                <a href="https://github.com/phanatuan/sweetpumpkin" className="btn btn-danger">View on Github</a>
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-md-12'>
            <div className='card'>
              <div className='card-header card-header-gradient'>
                <h4 className='card-title'>Build Flask Blog App</h4>
                <p className='category'>Built with Flask, Jinja Template, HTMl, CSS, Bootstrap</p>
              </div>
              <div className='card-body'>
                <h4>User Stories:</h4>
                <ul>
                    <li>Login User with Email, Using SQLite3 Database</li>
                    <li>CRUD Operation on Blog Post</li>
                    <li>Use Authorization Rule (User could only delete his/her post, not other users' posts</li>
                </ul>
                <a href="https://tuan-awesome-flask-blog.herokuapp.com/" className="btn btn-primary mr-2">Live Demo</a>
                <a href="https://github.com/phanatuan/flask-blog" className="btn btn-danger">View on Github</a>
              </div>
            </div>
          </div>

          <div className='col-lg-6 col-md-12'>
            <div className='card'>
              <div className='card-header card-header-gradient'>
                <h4 className='card-title'>RoboFriends</h4>
                <p className='category'>Built with React, Bootstrap, HTML</p>
              </div>
              <div className='card-body'>
                <h4>User Stories:</h4>
                <ul>
                    <li>Search Robots name on the fly</li>
                    <li>Fetch Robot Using the API</li>
                    <li>This is a project following an Udemy Course</li>
                </ul>
                <a href="https://tuan-robofriends.netlify.com" className="btn btn-primary mr-2">Live Demo</a>
                <a href="https://github.com/phanatuan/robofriends" className="btn btn-danger">View on Github</a>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
