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

function App() {
  return (
    <Router>
      <Nav />
    </Router>
  );
}

export default App;
