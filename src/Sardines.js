import React from 'react';
import { useNavigate } from 'react-router-dom';


/** Sardines component that renders the Sardines page and returns a user to the home
 *  page on button press
 *
 *  Props: None
 *  State: None
 *
 * { VendingMachine, NavBar } --> Sardines
 */

function Sardines() {
  const navigate = useNavigate();

  // Returns a user to the homepage
  function goHome() {
    navigate("/");
  };

  return (
    <div className="Sardines">
      <h2>Sardines</h2>
      <button onClick={goHome}>Go Back</button>
    </div>
  );
}

export default Sardines;