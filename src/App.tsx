import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return <div className="app">
    <Router>
      <Header/>
      
      <Switch>
        <Route path="/">
          <div>Home</div>
        </Route>
        <Route path="/bio">
          <div>Bio</div>
        </Route>
      </Switch>

      <Footer/>
    </Router>
  </div>
}
