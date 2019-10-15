import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Nav";
import Dashboard from "./Dashboard";
import Organization from "./Organization";
import NotFound from "./NotFound";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/organizations/:org" component={Organization} />
        <Route exact path="/" component={Dashboard} />
        <Route path="/" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
