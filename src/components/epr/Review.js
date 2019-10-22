import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./BasicInfo.css";

export default class Review extends React.Component {
  render() {
    return (
      <Container className="BasicInfo">
          <h5>Review and Confirm</h5>
          <Row>
              <Col xs="6">
                  <b>Event Title</b>
                  <p>{this.props.info.name}</p>
                  <br/>
                  <b>Public Description</b>
                  <p>{this.props.info.publicDescription}</p>
                  <b>Private Description</b>
                  <p>{this.props.info.privateDescription}</p>
                  <br/>
                  <b>Number of Participants</b>
                  <p>{this.props.info.numParticipants}</p>
                  <br/>
                  <b>Location</b>
                  {
                    this.props.info.locations.forEach((location) => {
                      return <p>{location.location}</p>
                    })
                  }
                  <br/>
              </Col>
              <Col xs="6">
                  <b>Recurrence</b>
                  <p>{this.props.info.repeatCycle}</p>
                  <br/>
                  <b>Date</b>
                  <p>{this.props.info.date}</p>
                  <b>Start Time</b>
                  <p>{this.props.info.startTime}</p>
                  <br/>
                  <b>End Time</b>
                  <p>{this.props.info.endTime}</p>
                  <br/>
                  <b>Supplements</b>
                  {
                    (() => {
                        for (let [key, value] of Object.entries(this.props.info.supplements)) {
                        return <>
                          <b>{key}</b>
                          <p>{value}</p>
                          <br/>
                        </>
                      }
                    })
                  }
                  <br/>
              </Col>
          </Row>
      </Container>
    );
  }
};

