import React from 'react';
import About from '../components/about';
import './stage.css';

function Stage(props) {
  const {router} = props;
  return(
    <div className="stage-container">
      <div className="stage">
        <About />
      </div>
    </div>
  )
}

export default Stage;
