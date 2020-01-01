import React from 'react';
import About from '../components/about';
import CloudSnippet from '../components/cloud-snippet';
import './stage.css';

function Stage(props) {
  const {router} = props;
  return(
    <div className="stage-container">
      <div className="stage">
        <About />
        <CloudSnippet router={router} />
      </div>
    </div>
  )
}

export default Stage;
