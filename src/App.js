import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Dashboard from "./pages/Dashboard";
import Organization from "./pages/Organization";
import NotFound from "./pages/NotFound";
<<<<<<< HEAD
import BasicInfo from "./components/epr/BasicInfo";
=======
import Epr from "./components/Epr";
>>>>>>> master

function App() {
  return (
    <Router>
      <Nav />
      <BasicInfo/>
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
