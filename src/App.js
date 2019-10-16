import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Dashboard from "./pages/Dashboard";
import Organization from "./pages/Organization";
import NotFound from "./pages/NotFound";
import ProgressBar from "./components/ProgressBar";

function App() {
  return (
    <Router>
      <Nav />
      <ProgressBar/>
      <Switch>
        <Route path="/organizations/:org" component={Organization} />
        <Route exact path="/" component={Dashboard} />
        <Route path="/" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
