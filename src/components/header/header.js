import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './header.scss'

const Header = () => {
  return (
    <header>
      <h1 className="header">RESTy</h1>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
            <li>
              <NavLink to="/history" >History</NavLink>
            </li>
            <li>
              <NavLink to="/help" >Help</NavLink>
            </li>
        </ul>
      </nav>
    </header>
  )
};


export default Header;
