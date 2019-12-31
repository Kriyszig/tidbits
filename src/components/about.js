import React from 'react';
import Avatar from '../static/img/avatar.jpg'
import './about.css';

function About() {
  return (
    <div className="about">
      <img className="avatar" src={Avatar} alt="Me" lazy />
      <p className="intro">
        Hello there, I'm <kbd className="me">Prateek</kbd> (^_^)<br />
        An average 1x developer.<br />
        Developing for web with <kbd>React</kbd><br />
        & for mobile with <kbd>Flutter</kbd>
        <br /><br />
        Tidbits is a place for my shower thoughts.<br />
        Some thoughts may be dark and disturbing!<br />
        I may use <kbd>var</kbd> instead of <kbd>let</kbd> in my code snippets.
      </p>
    </div>
  )
}

export default About;
