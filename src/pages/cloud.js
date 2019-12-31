import React from 'react';
import {Link} from 'react-router-dom';
import './article.css';

function Cloud() {
  return (
    <div className="stage-container">
      <div className="stage">
        <Link className="link" to={'/'}>
          <kbd className="arrow">◀</kbd> Go Back
        </Link>
        <p className="headline">
          Cloud Computing and Gaming Arcades
        </p>
        <p className="date">
          31st December, 2019
        </p>
        <div className="post-body">
          <p>
            When I was young, I loved playing the game Pac-Man. All you needed was a
            coin to drop into the tin box and you were the master of the pixels on
            that tiny screen. Today, over a decade later, things have changed. I no
            longer play Pac-Man. Instead I play Doom Eternal on Google Stadia while
            my machine learning model is trained on Google's Cloud Server. Although,
            the toys have changed, the core concept still remains the same.
          </p>
          <p>
            Buying a Pac-Man Arcade machine back in the days cost a fortune. But that
            didn't stop the dream. A wise man decided to share what was his with us
            for a tiny reasonable price. The way I see it, Cloud Computing is no
            different - I couldn't afford a rig to play the latest and greatest
            demanding games, nor can I afford one to train a Machine Learning model
            in a reasonable amount of time. So I rent one. I play a game while the,
            server does the heavy lifting. I see the epochs go by as the RTX in some
            corner of Google's Datacenter trying to teach itself how to differentiate
            between a Horse and a Zebra.  
          </p>
          <p>
            <kbd>What does it all signify?</kbd><br />
            Given there are similarities in how a Cloud Computing Business and an Gaming
            Arcade work, we can use insights from one to improve the other.<br />
            The arcade that once stood at the corner of our street is no more. It had
            to shut its door forever. The cause of this? Well, a simple revolution
            called gaming consoles. Gaming consoles opened the door to so much more
            potential. The failure of Arcades to react to these changes cause it's
            massive downfall.            
          </p>
          <p>
            This is why it's important to innovate and that's why the Cloud Computing
            businesses and startups are striving to be the first at something or other.
            Some are fast. Some are cheap. Some allow you to tinker on Windows while
            others offer a chance to tinker on your favorite Linux Distribution. They
            allow you to orchestrate Containers remotely. They provide runtime for new
            technologies. Everything is possible by typing a series of commands on a
            terminal on your screen. The innovation drives the survival, the survival
            drives the innovation.
            <br /><br />
            <kbd>The game is simple. Hunt or be Hunted.</kbd>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Cloud;