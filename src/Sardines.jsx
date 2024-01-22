import React from 'react';
import { useNavigate } from 'react-router-dom';


function Sardines() {
  const navigate = useNavigate();

  function goHome() {
    navigate("/");
  }

  return (
    <div className="Sardines">
      <h2>Sardines</h2>
      <button onClick={goHome}>Go Back</button>
    </div>
  );
}

export default Sardines;