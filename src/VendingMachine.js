import React from 'react';
import { Link } from 'react-router-dom';

import "./VendingMachine.css";

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