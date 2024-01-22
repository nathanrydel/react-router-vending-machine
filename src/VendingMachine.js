import React from 'react';
import { Link } from 'react-router-dom';

import "./VendingMachine.css";


/** Vending Machine Component that redirects to chips, soda, and sardine
 * pages.
 *
 * Props: None
 * State: None
 *
 * { App } --> VendingMachine --> Chips, Sardines, Soda
 */
function VendingMachine() {
  return (
    <div className='VendingMachine'>
      <h1>Hello I am a vending machine!</h1>
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

export default VendingMachine;