import React from 'react';
import { useNavigate } from 'react-router-dom';


/** Soda component that renders the Soda page and returns a user to the home
 *  page on button press
 *
 *  Props: None
 *  State: None
 *
 * { VendingMachine, NavBar } --> Soda
 */

function Soda() {
  const navigate = useNavigate();

  // Returns a user to the homepage
  function goHome() {
    navigate("/");
  };

  return (
    <div className="Soda">
      <h2>Soda</h2>
      <button onClick={goHome}>Go Back</button>
    </div>
  );
}

export default Soda;