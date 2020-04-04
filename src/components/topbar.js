import React from 'react';
import './topbar.css';

function TopBar(props) {
  const {router} = props;

  return (
    <nav className="topbar">
      <span className="logo" onClick={() => router('/')}>
        TIDBITS
      </span>
    </nav>
  );
}

export default TopBar;