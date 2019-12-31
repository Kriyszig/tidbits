import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import TopBar from './components/topbar';
import Stage from './pages/stage';
import Cloud from './pages/cloud';
import './App.css';

function App() {
  return (
    <Router>
      <div className="hero-container">
        <TopBar />
        <Route exact path="/" component={Stage} />
        <Route path="/posts/cloud-computing-and-arcade" component={Cloud} />
      </div>
    </Router>
  );
}

export default App;
