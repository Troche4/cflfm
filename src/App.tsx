import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Home';

export default function App() {
  return <div className="app">
    <Router>
      <Header/>
      
      <div className="container">
        <Switch>
          <Route path="/bio">
            <div>Bio</div>
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
