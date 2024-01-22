import React from 'react';
import { useNavigate } from 'react-router-dom';


function Soda() {
  const navigate = useNavigate();

  function goHome() {
    navigate("/");
  }

  return (
    <div className="Soda">
      <h2>Soda</h2>
      <button onClick={goHome}>Go Back</button>
    </div>
  );
}

export default Soda;