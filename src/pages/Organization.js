import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./Organization.css";

import { getEvents, Event, addEvent, PossibleEventLocations, eventStatuses } from "../services/eventServices.js";

import { Redirect, Link } from "react-router-dom";

import EventCard from "../components/EventCard.js";

import { ReactComponent as Send } from "../send.svg";

const NebraskansForCheese = () => {
  const events = getEvents("nebraskansforcheese");

  return (
    <Container>
      <Row className="mt-5 mb-2">
        <Col md="12">
          <h1 className="display-2">Nebraskans For Cheese</h1>
        </Col>
      </Row>
      <Row>
        <Col lg="6">
          <h5>EVENTS</h5>
          <div className="mt-3">
            {events.map((event) => {
              return (
                <div className="my-3">
                  <EventCard eventName={event.name} eventLocation={event.locations[0].location} eventDate={event.date} eventStatus={event.status}></EventCard>
                </div>
              );
            })}
          </div>
        </Col>
        <Col sm="1"></Col>
        <Col sm="3" >
            <h5>ACTIONS</h5>
            <div className="mt-3">
              <Link
                to={"/reimbursement/nebraskansforcheese"}
                className="goto-link"
              >
                <div className="action-div">
                    <div style={{"marginTop": "20px", "marginLeft": "15px"}}>
                      <span className="goto-link-text">File a Reimbursement</span>
                      <Send
                        height="30px"
                        width="30px"
                      />
                    </div>
                </div>            
              </Link>
              <Link
                to={"/epr/nebraskansforcheese"}
                className="goto-link"
              >
                <div className="action-div">
                    <div style={{"marginTop": "20px", "marginLeft": "15px"}}>
                      <span className="goto-link-text">Plan an Event</span>
                      <Send
                        height="30px"
                        width="30px"
                      />
                    </div>
                </div>            
              </Link>
            </div>
        </Col>
      </Row>
    </Container>
  );
};

const ScottFrostAppreciationClub = () => {
  const events = getEvents("scottfrostappreciationclub");

  return (
    <Container>
      <Row className="mt-5 mb-2">
        <Col md="12">
          <h1 className="display-2">ScottFrostAppreciationClub</h1>
        </Col>
      </Row>
      <Row>
        <Col lg="6">
          <h5>EVENTS</h5>
          <div className="mt-3">
            {events.map((event) => {
              return (
                <div className="my-3">
                  <EventCard eventName={event.name} eventLocation={event.locations[0].label} eventDate={event.date} eventStatus={event.status}></EventCard>
                </div>
              );
            })}
          </div>
        </Col>
        <Col sm="1"></Col>
        <Col sm="3" >
            <h5>ACTIONS</h5>
            <div className="mt-3">
              <Link
                to={"/epr/scottfrostappreciationclub"}
                className="goto-link"
              >
                <div className="action-div">
                    <div style={{"marginTop": "20px", "marginLeft": "15px"}}>
                      <span className="goto-link-text">Plan an Event</span>
                      <Send
                        height="30px"
                        width="30px"
                      />
                    </div>
                </div>            
              </Link>
            </div>
        </Col>
      </Row>
    </Container>
  );
};

const Organization = props => {
  const { org } = props.match.params;
  return org === "nebraskansforcheese" ? <NebraskansForCheese /> : <ScottFrostAppreciationClub />;
};

export default Organization;
