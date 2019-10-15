import React from "react"; 
import "./Organization.css"; 
import { Route } from "react-router-dom"; 

const One = () => {
    return(
    <div>
        <h1>One!</h1> 
    </div>
    );
};

const Two = () => {
    return(
        <div>
            <h1>Two!</h1>
        </div>
    );
};

const Organization = (props) => {

    let { org } = props.match.params;
    let component; 

    if (org === "test") {
        component = <One/>
    } else {
        component = <Two/>
    }

    return(
        <div>
            { component }
        </div>
    );
}

export default Organization; 