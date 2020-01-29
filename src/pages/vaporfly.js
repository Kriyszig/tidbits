import React from 'react';
import './article.css';

function Vaporfly(props) {
  const {router} = props;

  return (
    <div className="stage-container">
      <div className="stage">
        {/*eslint-disable-next-line*/}
        <a className="link" onClick={() => router('/')}>
          <kbd className="arrow">◀</kbd> Go Back
        </a>
        <p className="headline">
          Nike Vaporfly - A Case of Milage
        </p>
        <p className="date">
          31st December, 2019
        </p>
        <div className="post-body">
          <p>
            <kbd>Nike Vaporfly</kbd> has made headlines recently and not in a good
            way. Nike's research and several other independent ones claim that the
            shoe gives a 4% performance boost for runners and it is pretty clear that
            they work looking at the recent records that were shattered especially
            the one Eliud Kipchoge set by running a full marathon in just under two
            hours. With such a feat came controversies. There are rumours that the
            shoe will likely be banned before the Tokyo Olympic Games as it provides
            an unfair advantage to the wearer. But let us look at the other side of
            the coin.
          </p>
          <p>
            The Vaporfly is now a case of milage - In other words, how small improvements
            can go a long way for an athlete with a career in running. Many athletes
            retire from sports every year. Most of them, we never hear from ever again
            on a large stage. Now you may argue that these celebrities, these athletes
            have made some good decision along their career to enable a smooth retirement
            where their investments and their prior deals bring in money to sustain their
            lives but most don't end up in rich mansion on a cliff staring the ocean.
          </p>
          <p>
            Why is Vaporfly an unfair advantage? Only because you can't run in them once
            you have been signed on by Adidas. Kidding aside, ability to sustain their
            prime time for a longer duration can help these athletes a lot in the long
            run - not only the run on the track but also the run of their life. The ability
            to compete for a little longer is the straw any athlete would take in this
            super competitive industry.
          </p>
          <p>
            <kbd>Using it is same as doping!</kbd> Now that I think is debatable. Doping
            provides you with a transformation enabling you to put in far more than you
            could prior to doping but Nike simply reduces the energy lost per step. It's
            not like mother Earth is pushing you up magically to enable you to outperform
            the others.
          </p>
          <p>
            In the end I think Vaporfly marks a new milestone in shoe industry despite
            the controversy surrounding it. Does it make you better instantly? Yes, but
            it also enables you to push forward without flying too close to the sun. In
            the long run, it's benefits may just enable us to watch our favorite
            athletes compete longer without dropping out keeping us jammed to the
            television sets and them jammed at the sport. 
          </p>
        </div>
      </div>
    </div>
  )
}

export default Vaporfly;