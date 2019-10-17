import React from "react";
import "./BasicInfo.css";
import { eventRepeatOptions } from "../../services/eventServices";
import { Button, Container, Row, Col, Form, FormGroup, Label, Input } from "reactstrap";

export default class BasicInfo extends React.Component  {
    constructor(props) {
        super(props);

        //pre-populates dropdown options using enum
        this.repeatOptions = [];
        for(const option in eventRepeatOptions) {
            this.repeatOptions.push(<option>{option}</option>)
        }

        this.state = {
            repeatCycle: "None"
        };
    }

    //Processes changes in the input and sets them in state
    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name] : value
        });
    }

    //Form validation, data cleanup, and sending to parent
    validateAndSave = () => {
        //TODO add form validation here

        // Process constituent parts of time to prepare for event state
        // I know this is whack, but our interface has time in 3 separate form inputs
        const startTime = `${this.state.startHour}:${this.state.startMinute}`;
        const endTime = `${this.state.endHour}:${this.state.endMinute}`;

        this.setState({
            startTime,
            endTime
        }, () => {
            this.props.handler(this.state);
        });
    }

    render() {
        return (
            <Container className="BasicInfo">
                <h5>Basic Info</h5>
                <Form className="Form">
                    <Row>
                        <Col xs="6">
                                <FormGroup>
                                    <Label for="eventTitle">Title</Label>
                                    <Input name="name" id="eventTitle" placeholder="Your Event Title" onChange={this.handleChange}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="publicDesc">Public Description</Label>
                                    <Input name="publicDescription" type="textarea" id="publicDesc" rows="3" onChange={this.handleChange}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="privateDesc">Private Description</Label>
                                    <Input name="privateDescription" type="textarea" id="privateDesc" rows="3" onChange={this.handleChange}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="numParticipants">Number of Participants</Label>
                                    <Input name="numParticipants" id="numParticipants" placeholder="E.g. 40 or 5-10" onChange={this.handleChange}/>
                                </FormGroup>
                        </Col>
                        <Col xs="6">
                        <FormGroup>
                            <Label for="recurrenceSelect">Recurrence</Label>
                            <Input name="repeatCycle" type="select" id="recurrenceSelect" onChange={this.handleChange}>
                                {this.repeatOptions};
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="date">Date</Label>
                            <Input name="date" id="date" placeholder="MM/DD/YYYY" onChange={this.handleChange} />
                        </FormGroup>
                        <Label for="time">Start Time</Label>
                        <Row>
                            <Col xs="6" sm="3">
                                <FormGroup>
                                    <Input name="startHour" id="hour" placeholder="12" onChange={this.handleChange}/>
                                </FormGroup>
                            </Col>
                            :
                            <Col xs="6" sm="3">
                                <Input name="startMinute" id="startMinute" placeholder="00" onChange={this.handleChange}/>
                            </Col>
                            <Col sm="3">
                                <FormGroup>
                                    <Input name="startAmPm" type="select" id="amSelect" onChange={this.handleChange}>
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
                                    <Input name="endHour" id="hour" placeholder="12" onChange={this.handleChange}/>
                                </FormGroup>
                            </Col>
                            :
                            <Col xs="6" sm="3">
                                <Input name="endMinute" id="endMinute" placeholder="00" onChange={this.handleChange}/>
                            </Col>
                            <Col sm="3">
                                <FormGroup>
                                    <Input type="select" name="endAmPm" id="endAmPm" onChange={this.handleChange}>
                                        <option>AM</option>
                                        <option>PM</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                </Form>
                <Button onClick={this.validateAndSave} className="Button">Next: Location ></Button>
            </Container>
        );
    }
};
