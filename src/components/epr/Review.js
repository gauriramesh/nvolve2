import React from "react";
import { Redirect } from "react-router-dom";
import { Button, Container, Row, Col } from "reactstrap";
import { SupplementOptions } from "../../pages/supplements/Supplement";
import { addEvent } from "../../services/eventServices";
import "./BasicInfo.css";

export default class Review extends React.Component {
  constructor(props) {
    super(props);
    this.locations = [];
    this.supplements = [];
    this.state = {
      redirectOnSubmit : false
    }
  }

  componentDidMount() {
    this.props.info.locations.forEach((location) => {
      this.locations.push(<p>{location.location}</p>)
    })
    for(let key of Object.entries(this.props.info.supplements)) {
      this.supplements.push(
          <p>{SupplementOptions[key]}</p>
      )
    }
  }

  submit = () => {
    addEvent(this.props.org, this.props.info);
    this.setState({
      redirectOnSubmit: true
    })
  }
  render() {
    return (
      <div className="BasicInfo">
        <h5>Review and Confirm</h5>
        <Container>
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
                      this.locations
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
                      this.supplements
                    }
                    <br/>
                </Col>
            </Row>
        </Container>
        <Button onClick={this.submit} color="primary" className="Button">Submit</Button>
        {
          this.state.redirectOnSubmit && <Redirect to={{pathname : "/", state : {formSuccessfullySubmitted : true}}}/>
        }
      </div>
    );
  }
};

