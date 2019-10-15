import React from "react"; 
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
            <NavbarBrand href="#">NVolve2</NavbarBrand>
        </Navbar>
    </div>);
};

export default Nav; 