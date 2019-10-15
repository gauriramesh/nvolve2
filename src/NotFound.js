import React from "react";
import "./NotFound.css"; 

import {
    Container, 
    Row, 
    Col
} from "reactstrap"; 

const NotFound = () => {
    return(
        <Container>
            <Row>
                <Col md="6" className="mx-auto">
                    <h1 className="display-2">Not Found.</h1>
                    <p className="not-found-content mt-5">
                        Uh oh! The page you were looking for wasn't found. 
                        We're not quite sure how you got here, but you did. 
                        So please try again.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col md="12">
                    <div class="text-center">
                    <img className="rounded" src="https://media.giphy.com/media/EsmlrgWNx5v0Y/giphy.gif"/>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default NotFound; 