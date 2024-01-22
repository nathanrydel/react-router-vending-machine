import React from 'react'
import { useNavigate } from 'react-router-dom';

function Chips() {
  const navigate = useNavigate();

  function goHome() {
    navigate("/")
  }

  return (
    <div className="Chips">
      <h2>Chips</h2>
      <button onClick={goHome}>Go Back</button>
    </div>
  );
}

export default Chips