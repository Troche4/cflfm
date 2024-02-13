import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Home';
import Bio from './Bio';
import Competencies from './Competencies';
import Presentations from './Presentations';

export default function App() {
  return <div className="app">
    <Router>
      <Header/>
      
      <div className="container">
        <Switch>
          <Route path="/presentations">
            <Presentations/>
          </Route>
          <Route path="/competencies">
            <Competencies/>
          </Route>
          <Route path="/bio">
            <Bio/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>

      <Footer/>
    </Router>
  </div>
}
