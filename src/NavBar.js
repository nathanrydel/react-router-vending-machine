import React from 'react';
import { Link } from 'react-router-dom';

import "./NavBar.css";

/** Basic Navigation Bar component that redirects to homepage, chips, sardines,
 *  or soda pages.
 *
 * Props: None
 * State: None
 *
 * { App } --> NavBar --> VendingMachine, Chips, Soda, Sardines
*/
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