import React from "react";
import './Nav.css';

const Nav = () => {
  return (
    <nav className='navbar navbar-expand-lg bg-dark mb-0 rounded-0' id='top'>
      <div className='container'>
        <b><a className='navbar-brand' href='#'>Portfolio</a></b>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='sr-only'>Toggle navigation</span>
          <span className='navbar-toggler-icon' />
          <span className='navbar-toggler-icon' />
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <a className='nav-link' href='#about'>
                About
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#portfolio'>
                Portfolio
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#contact'>
                Contact
              </a>
            </li>
          </ul>
          <span className='navbar-text ml-auto'><a href="https://github.com/phanatuan/portfolio">Star Me on Github!</a></span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
