import React, {useState} from 'react';

import TopBar from './components/topbar';
import Stage from './pages/stage';
import Vaporfly from './pages/vaporfly';
import Users from './pages/user';
import './App.css';

function App() {
  const [routeState, setRouteState] = useState('/');

  return (
    <div className="hero-container">
      <TopBar router={setRouteState} />
      {
        (routeState === '/')?
          <Stage  router={setRouteState} />
        : (routeState === 'fly')?
          <Vaporfly router={setRouteState} />
        : (routeState === 'Windows')?
          <Users router={setRouteState} />
        :
          ''
      }
    </div>
  );
}

export default App;
