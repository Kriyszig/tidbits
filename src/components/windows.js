import React from 'react';
import './snippet.css';

function Windows(props) {
  const {router} = props;

  return(
    // eslint-disable-next-line
    <a className="link" onClick={() => router('Windows')}>
      <div className="article-container">
        <p className="article-snippet-headline">
          It's not about you. It's about the users!
        </p>
        <p className="article-date">
          4th April, 2020
        </p>
        <p className="article-description">
          How focusing on the user rather than your product might just be the key to success!
        </p>
      </div>
    </a>
  );
}

export default Windows;
