import React from "react";

const Nav = () => {
  return (
    <nav className='navbar navbar-expand-lg bg-dark mb-0'>
      <div className='container'>
        <a className='navbar-brand' href='#'>
          Portfolio
        </a>
        
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item active'>
              <a className='nav-link' href='#'>
                About <span className='sr-only'></span>
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Portfolio
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
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
