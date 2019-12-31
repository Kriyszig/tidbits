import React from 'react';
import {Link} from 'react-router-dom';
import './snippet.css';

function CloudSnippet() {
  return(
    <Link className="link" to={'/posts/cloud-computing-and-arcade'}>
      <div className="article-container">
        <p className="article-snippet-headline">
          Cloud Computing and Gaming Arcades
        </p>
        <p className="article-date">
          31st December, 2019
        </p>
        <p className="article-description">
          Comparing the striking similarities between the business of cloud computing and running a gaming arcade
        </p>
      </div>
    </Link>
  );
}

export default CloudSnippet;
