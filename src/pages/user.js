import React from 'react';
import './article.css';

function Users(props) {
  const {router} = props;

  return (
    <div className="stage-container">
      <div className="stage">
        {/*eslint-disable-next-line*/}
        <a className="link" onClick={() => router('/')}>
          <kbd className="arrow">◀</kbd> Go Back
        </a>
        <p className="headline">
          How the user makes or breaks your product!
        </p>
        <p className="date">
          4th April, 2020
        </p>
        <div className="post-body">
          <p>
            <kbd>User</kbd> is the target any organization sets when it develops a
            product. Without them, there is no realy use for what we develop. There
            is a reason why <kbd>Amazon</kbd>, a company that focuses obsessively about
            it's customers is one of the few companies that hit the trillion dollar mark
            and continues to hover around that number consistently. Amazon as a company
            would be nowhere without the millions of people ordering goods onlie everyday
            and they have made it their missin to cater to their needs 24 X 7.
          </p>
          <p>
            Keeping things simple is the way they do it. Amazon doesn't have the most
            sophisticated user interface. It looks like a website deriving it's styles
            from the past decade but it works for them. Sometimes it's not all about the
            charms. For Amazon it's about keeping the non-essential features to minimum
            and ease up buying and selling for all generations. It doesn't matter if you
            are a 60 year old with limited knowledge of the internet or a millenial who
            can't take his eyes off the smartphone; In either cases, one shouldn't have
            any problem in getting the product that they need. Same stand sfor sellers.
            If you have something to sell, Amazon will make it effortless for you to
            reach the customers you need. 
          </p>
          <p>
            <kbd>Why am I talking about this?</kbd> I use Manjaro based on GNU/Linux
            for most of my day to day task and use Firefox nightly for website testing.
            The problem is most of my users are on Windows using stable version of Chrome.
            In other words, a large chunk of y users may have an inconsistent experience
            from what I imagined it to be mostly because I'm developing on a platform that
            not many of my users use and for a browser that offers feature way ahead of time.
            Don't get me wrong, browsers today have takes a lot of steps to make the
            experience consistent across each other but some aspects like fonts and ceratin
            CSS properties that may not behave consistently across all of them.
          </p>
          <p>
            I now make it a point to hop on over to Windows and test everyrhing I build.
            Everything from a desktop to a mobile viewport, should have a consistent
            experience, te way developer meant it to be. Sometimes, you need to go the
            extra mile to navigate to the Windows option in the GRUB menu to make sure
            your user sees exactly what you want him to see.
          </p>
          <p>
            Focusing on user has never been bad. Look at Microsoft and how they managed to
            turn fumm 180 by focusing on their customer base and enhancing the infrastructure
            that matters. They trimmed the fat [Remember Windows Phone?!], and doubled down
            on cloud and their profession suite and that was one of the smartest move they
            made. They have actively taken part in open source publishing some of the
            major projects such as Typescript and VS Code, to acquiring Github and now the
            Node PAckage Manager [NPM] only strengthening their bond with the community.
          </p>
          <p>
            Google has been doing it forever keeping things simple for their users and
            actively endorsing open source. Same is the principle with Facebook, Instagram,
            and other pieces of successful software. Netflix brought convenience to people's
            homes by enabling them to access the large catalogue of movies and shows on a 
            subscripton basis.
          </p>
          <p>
            In the end, all I say is this: <kbd>Don't build a product just because it looks
            cool or has fancy features. Build products keeping in mind the users who will
            end up interacting with it.</kbd>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Users;