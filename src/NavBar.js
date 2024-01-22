import React from 'react';
import { Link } from 'react-router-dom';

import "./NavBar.css"

function NavBar() {
  return (
    <div className='NavBar'>
      <Link to="/">
        Home
      </Link>
      <Link to="/chips">
        Chips
      </Link>
      <Link to="/soda">
        Soda
      </Link>
      <Link to="/sardines">
        Sardines
      </Link>
    </div>
  );
}

export default NavBar;