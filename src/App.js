import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Dashboard from "./pages/Dashboard";
import Organization from "./pages/Organization";
import NotFound from "./pages/NotFound";
import Epr from "./components/Epr";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/organizations/:org" component={Organization} />
        <Route path="/epr/:org" component={Epr} />
        <Route exact path="/" component={Dashboard} />
        <Route path="/" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
