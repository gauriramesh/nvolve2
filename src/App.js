import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Dashboard from "./pages/Dashboard";
import Organization from "./pages/Organization";
import NotFound from "./pages/NotFound";
import Reimbursement from "./pages/Reimbursement";
import Epr from "./components/Epr";

import { getNotifications } from "./services/notificationServices";

function App() {
  const [notifications, setNotifications] = useState(getNotifications());

  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/organizations/:org" component={Organization} />
        <Route path="/epr/:org" component={Epr} />
        <Route
          exact
          path="/"
          render={props => (
            <Dashboard
              {...props}
              notifications={notifications}
              setNotifications={setNotifications}
            />
          )}
        />
        <Route path="/reimbursement" component={Reimbursement} />
        <Route path="/" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
