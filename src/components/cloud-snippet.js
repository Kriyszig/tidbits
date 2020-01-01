import React from 'react';
import './snippet.css';

function CloudSnippet(props) {
  const {router} = props;

  return(
    // eslint-disable-next-line
    <a className="link" onClick={() => router('cloud')}>
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
    </a>
  );
}

export default CloudSnippet;
