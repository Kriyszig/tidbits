import React from 'react';
import About from '../components/about';
import CloudSnippet from '../components/cloud-snippet';
import './stage.css';

function Stage() {
  return(
    <div className="stage-container">
      <div className="stage">
        <About />
        <CloudSnippet />
      </div>
    </div>
  )
}

export default Stage;
