import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link
} from "react-router-dom"; 
import Nav from "./Nav";
import Dashboard from "./Dashboard";
import Organization from "./Organization";
import NotFound from "./NotFound"

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/organizations/:org" component={Organization}></Route>
        <Route exact path="/" component={Dashboard}/>
        <Route path="/" component={NotFound}/>
      </Switch>
    </Router>
  );
}

export default App;
