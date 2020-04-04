import React from 'react';
import About from '../components/about';
import Fly from '../components/fly';
import Windows from '../components/windows'
import './stage.css';

function Stage(props) {
  const {router} = props;
  return(
    <div className="stage-container">
      <div className="stage">
        <About />
        <Windows router={router} />
        <Fly router={router} />
      </div>
    </div>
  )
}

export default Stage;
