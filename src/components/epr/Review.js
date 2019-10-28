import React from "react";
import { Redirect } from "react-router-dom";
import { Button, Container, Row, Col } from "reactstrap";
import { SupplementOptions } from "../../pages/supplements/Supplement";
import { addEvent, PageOptions } from "../../services/eventServices";
import ProgressBar from "../ProgressBar";
import "./BasicInfo.css";

export default class Review extends React.Component {
  constructor(props) {
    super(props);
    this.supplements = [];
    this.state = {
      redirectOnSubmit : false
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
      <>
        <ProgressBar currentPage={PageOptions.review}></ProgressBar>
        <div>
          
          <Container>
            <h5>Review and Submit</h5>
              <Row className="BasicInfo">
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
                        this.props.info.locations.map((location) => <p>{location.location}</p>)
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
                        Object.entries(this.props.info.supplements).map((arr) => {
                          if(arr[1] !== null) {
                            return(<p>{SupplementOptions[arr[0]]}</p>)
                          }
                        })
                      }
                      <br/>
                  </Col>
              </Row>
              <Button style={ { float: 'left', margin: '15pt'} }color="primary" onClick={this.props.previousForm}> &lt; Supplements </Button>
          <Button onClick={this.submit} color="success" className="Button" style={{ float: 'right', margin: '15pt' }}>Submit</Button>
          {
            this.state.redirectOnSubmit && <Redirect to={{pathname : "/", state : {formSuccessfullySubmitted : true}}}/>
          }
          </Container>
        </div>
      </>
    );
  }
};

