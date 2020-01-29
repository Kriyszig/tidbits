import React from 'react';
import './snippet.css';

function Fly(props) {
  const {router} = props;

  return(
    // eslint-disable-next-line
    <a className="link" onClick={() => router('fly')}>
      <div className="article-container">
        <p className="article-snippet-headline">
          Nike Vaporfly - The other side of the coin
        </p>
        <p className="article-date">
          27th January, 2019
        </p>
        <p className="article-description">
          What does the Nike Vaporfly's advantage mean for an athlete and should it be banned?
        </p>
      </div>
    </a>
  );
}

export default Fly;
