import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./Organization.css";

import { getEvents, Event, addEvent, PossibleEventLocations } from "../services/eventServices.js";

import { Redirect, Link } from "react-router-dom";

import EventCard from "../components/EventCard.js";

const NebraskansForCheese = () => {
  const testEvent = new Event();
  testEvent.name = "Test";
  testEvent.date = new Date();
  testEvent.addLocation(PossibleEventLocations[0]);
  addEvent("nebraskansforcheese", testEvent);
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
                  <EventCard eventName={event.name} eventLocation={event.locations[0].label} eventDate={event.date} eventStatus={event.status}></EventCard>
                </div>
              );
            })}
          </div>
        </Col>
        <Col sm="3" >
            <h5>Actions</h5>
            <Link
              to={"/organizations/nebraskansforcheese/reimbursement"}>
              File a Reimbursement
            </Link>
            <Link
              to={"/organizations/nebraskansforcheese/epr"}>
              <Container className="action-div">
                <span className="goto-link-text">Plan an Event</span>
              </Container>
            </Link>
        </Col>
      </Row>
    </Container>
  );
};

const ScottFrostAppreciationClub = () => {
  return (
    <div>
      <h1>Two!</h1>
    </div>
  );
};

const Organization = props => {
  const { org } = props.match.params;
  return org === "nebraskansforcheese" ? <NebraskansForCheese /> : <ScottFrostAppreciationClub />;
};

export default Organization;
