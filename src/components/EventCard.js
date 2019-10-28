import React from "react";
import "./EventCard.css";

import { Container, Row, Col } from "reactstrap";

import { ReactComponent as Cal } from "../cal.svg";
import { ReactComponent as Loc } from "../location.svg";

class EventCard extends React.Component {
    constructor(props) {
        super(props);
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
                        <h6 style={{display: 'inline-block'}}>{this.props.eventLocation}</h6>
                        <br />
                        <br />
                        <Cal 
                            width="30px"
                            height="30px"
                            style={{display: 'inline-block'}}
                        />
                        <h6 style={{display: 'inline-block'}}>{this.props.eventDate}</h6>
                    </Col>
                    <Col md="3" className="text-right">
                        <div className={this.props.eventStatus}></div>
                        <h6 style={{display: "inline-block", "marginRight": "10px"}}>{this.props.eventStatus}</h6>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default EventCard;