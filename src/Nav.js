import React from "react"; 
import './Nav.css';

import {
    Link, 
} from "react-router-dom";

import {
    Navbar,
    NavbarBrand,
} from "reactstrap";


const Nav = (props) => {
    return(
    <div>
        <Navbar color="light">
            <span className="navbar-brand">
                <Link className="brand-text" to="/">NVolve2</Link>
            </span>
        </Navbar>
    </div>);
};

export default Nav; 