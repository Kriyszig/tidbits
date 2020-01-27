import React from 'react';
import About from '../components/about';
import Fly from '../components/fly';
import './stage.css';

function Stage(props) {
  const {router} = props;
  return(
    <div className="stage-container">
      <div className="stage">
        <About />
        <Fly router={router} />
      </div>
    </div>
  )
}

export default Stage;
