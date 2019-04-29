import React from "react";

const Nav = () => {
  return (
    <nav className='navbar navbar-expand-lg bg-dark mb-0 rounded-0'>
      <div className='container'>
        <a className='navbar-brand'>
          Portfolio
        </a>
        
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
        </div>
      </div>
    </nav>
  );
};

export default Nav;
