import React, {useState} from 'react';

import TopBar from './components/topbar';
import Stage from './pages/stage';
import Cloud from './pages/cloud';
import './App.css';

function App() {
  const [routeState, setRouteState] = useState('/');

  return (
    <div className="hero-container">
      <TopBar />
      {
        (routeState === '/')?
          <Stage  router={setRouteState} />
        : (routeState === 'cloud')?
          <Cloud router={setRouteState} />
        :
          ''
      }
    </div>
  );
}

export default App;
