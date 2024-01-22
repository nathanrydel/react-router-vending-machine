import React from 'react'
import { useNavigate } from 'react-router-dom';


/** Chips component that renders the Chips page and returns a user to the home
 *  page on button press
 *
 *  Props: None
 *  State: None
 *
 * { VendingMachine, NavBar } --> Chips
 */

function Chips() {
  const navigate = useNavigate();

  // Returns a user to the homepage
  function goHome() {
    navigate("/");
  };

  return (
    <div className="Chips">
      <h2>Chips</h2>
      <button onClick={goHome}>Go Back</button>
    </div>
  );
}

export default Chips