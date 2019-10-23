import React from "react";
import "./EventCard.css";

import { Container, Row, Col } from "reactstrap";

import { Redirect, Link } from "react-router-dom";

import { ReactComponent as Cal } from "../cal.svg";
import { ReactComponent as Loc } from "../location.svg";

class EventCard extends React.Component {
    constructor(props) {
        super(props);

        this.redirectToEpr.bind(this);
        this.redirectToReimbursement.bind(this);
    }

    redirectToEpr() {
        this.setState(prevState => ({
            eprRedirect: true
        }));
    }
    
    redirectToReimbursement() {
        this.setState(prevState => ({
            reimbursementRedirect: true
        }));
    }

    getNiceDate() {
        console.log(this.props.eventDate)
        return this.props.eventDate.substring(5, 7) + "/" + this.props.eventDate.substring(8, 10) + "/" + this.props.eventDate.substring(0, 4);
    }

    render() {
        return (
            <Container className="event-card py-3 px-3">
                <Row>
                    <Col md="9">
                        <h2>{this.props.eventName}</h2>
                        <Loc 
                            width="30px"
                            height="30px"
                            style={{display: 'inline-block'}}
                        />
                        <h4 style={{display: 'inline-block'}}>{this.props.eventLocation}</h4>
                        <br />
                        <br />
                        <Cal 
                            width="30px"
                            height="30px"
                            style={{display: 'inline-block'}}
                        />
                        <h4 style={{display: 'inline-block'}}>{this.getNiceDate()}</h4>
                    </Col>
                    <Col md="3" className="text-right">
                        <h4>{this.props.eventStatus}</h4>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default EventCard;