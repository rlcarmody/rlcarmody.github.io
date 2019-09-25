import React from 'react';
import './Name.css';

export default () => {
  return (
    <div className="name">
      <h1><span id="firstname">Ryan</span> <span className="green-text" id="lastname">Carmody</span></h1>
      <h3 className="subtitle">Web Developer</h3>
    </div>
  )
}