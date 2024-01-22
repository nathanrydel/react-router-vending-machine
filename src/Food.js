import React, { useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";

function Food() {
  const { name } = useParams();
  const navigate = useNavigate();

  function goHome() {
    navigate("/")
  }

  return (
    <div className={name}>
      <h2>{name}</h2>
      <button onClick={goHome}>Go Back</button>
    </div>
  );
}

export default Food;