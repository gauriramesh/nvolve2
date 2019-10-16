import React from "react";
import "./Nav.css";

import { Link } from "react-router-dom";

import { Navbar } from "reactstrap";

const Nav = () => {
  return (
    <div>
      <Navbar className="brand-text">
        <span className="navbar-brand">
          <Link className="brand-text" to="/">
            NVolve2
          </Link>
        </span>
      </Navbar>
    </div>
  );
};

export default Nav;
