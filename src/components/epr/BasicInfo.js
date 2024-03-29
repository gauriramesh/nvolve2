import React from "react";
import "./BasicInfo.css";
import { eventRepeatOptions, PageOptions } from "../../services/eventServices";
import ProgressBar from "../ProgressBar";
import {
  Button,
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  FormFeedback,
  Label,
  Input
} from "reactstrap";

export default class BasicInfo extends React.Component {
  constructor(props) {
    super(props);

    //pre-populates dropdown options using enum
    this.repeatOptions = [];
    for (const option in eventRepeatOptions) {
      this.repeatOptions.push(<option key={option}>{option}</option>);
    }

    this.state = {
      repeatCycle: "None",
      startAmPm: "AM",
      endAmPm: "AM",
      invalid: {
        name: false,
        publicDescription: false,
        privateDescription: false,
        numParticipants: false,
        date: false,
        startTime: false,
        endTime: false
      }
    };
  }

  //Processes changes in the input and sets them in state
  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  };

  //Does basic check to see if all fields are occupied
  validate = () => {
    let isFullyValid = true;
    let invalidCopy = JSON.parse(JSON.stringify(this.state.invalid));

    for (let field in invalidCopy) {
      if (!this.state[field]) {
        invalidCopy[field] = true;
        isFullyValid = false;
      } else {
        invalidCopy[field] = false;
      }
    }
    this.setState({
      invalid: invalidCopy
    });
    return isFullyValid;
  };

  //Form validation, data cleanup, and sending to parent
  save = () => {
    const canProceed = this.validate();

    // If all forms filled, prepare info and send to master component
    if (canProceed) {
      const startTime = `${this.state.startTime} ${this.state.startAmPm}`;
      const endTime = `${this.state.endTime} ${this.state.endAmPm}`;

      this.setState(
        {
          startTime,
          endTime
        },
        () => {
          this.props.handler(this.state);
          this.props.nextForm();
        }
      );
    }
  };

  render() {
    const validField = this.state.invalid;
    return (
      <>
      <ProgressBar currentPage={PageOptions.basicInfo}></ProgressBar>
      <div>
        <Container>
          <h5>Basic Info</h5>
          <Form className="Form">
            <Row className="BasicInfo">
              <Col xs="6">
                <FormGroup>
                  <Label for="eventTitle">Title</Label>
                  <Input
                    invalid={validField.name}
                    name="name"
                    id="eventTitle"
                    placeholder="Your Event Title"
                    onChange={this.handleChange}
                  />
                  <FormFeedback invalid>Must specify event title.</FormFeedback>
                </FormGroup>
                <FormGroup>
                  <Label for="publicDesc">Public Description</Label>
                  <Input
                    invalid={validField.publicDescription}
                    name="publicDescription"
                    type="textarea"
                    id="publicDesc"
                    rows="3"
                    onChange={this.handleChange}
                  />
                  <FormFeedback invalid>
                    Must have a public description.
                  </FormFeedback>
                </FormGroup>
                <FormGroup>
                  <Label for="privateDesc">Private Description</Label>
                  <Input
                    invalid={validField.privateDescription}
                    name="privateDescription"
                    type="textarea"
                    id="privateDesc"
                    rows="3"
                    onChange={this.handleChange}
                  />
                  <FormFeedback invalid>
                    Must have a private description.
                  </FormFeedback>
                </FormGroup>
                <FormGroup>
                  <Label for="numParticipants">Number of Participants</Label>
                  <Input
                    invalid={validField.numParticipants}
                    name="numParticipants"
                    id="numParticipants"
                    placeholder="E.g. 40 or 5-10"
                    onChange={this.handleChange}
                  />
                  <FormFeedback invalid>
                    Must specify the number of participants.
                  </FormFeedback>
                </FormGroup>
              </Col>
              <Col xs="6">
                <FormGroup>
                  <Label for="recurrenceSelect">Recurrence</Label>
                  <Input
                    name="repeatCycle"
                    type="select"
                    id="recurrenceSelect"
                    onChange={this.handleChange}
                  >
                    {this.repeatOptions};
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="date">Date</Label>
                  <Input
                    invalid={validField.date}
                    name="date"
                    id="date"
                    placeholder="MM/DD/YYYY"
                    onChange={this.handleChange}
                  />
                  <FormFeedback invalid>Must specify date.</FormFeedback>
                </FormGroup>
                <Label for="time">Start Time</Label>
                <Row>
                  <Col xs="6" sm="3">
                    <FormGroup>
                      <Input
                        invalid={validField.startHour}
                        name="startTime"
                        id="hour"
                        onChange={this.handleChange}
                      />
                      <FormFeedback invalid>
                        Must specify start hour.
                      </FormFeedback>
                    </FormGroup>
                  </Col>
                  <Col sm="3">
                    <FormGroup>
                      <Input
                        name="startAmPm"
                        type="select"
                        id="amSelect"
                        onChange={this.handleChange}
                      >
                        <option>AM</option>
                        <option>PM</option>
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
                <Label for="time">End Time</Label>
                <Row>
                  <Col xs="6" sm="3">
                    <FormGroup>
                      <Input
                        invalid={validField.endHour}
                        name="endTime"
                        id="hour"
                        onChange={this.handleChange}
                      />
                      <FormFeedback invalid>Must specify end hour.</FormFeedback>
                    </FormGroup>
                  </Col>
                  <Col sm="3">
                    <FormGroup>
                      <Input
                        type="select"
                        name="endAmPm"
                        id="endAmPm"
                        onChange={this.handleChange}
                      >
                        <option>AM</option>
                        <option>PM</option>
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Form>
          <Button onClick={this.save} color="primary" className="Button" style={{ float: 'right', margin: '15pt'}}>
            Location &gt;
          </Button>
        </Container>
        </div>
      </>
    );
  }
}
