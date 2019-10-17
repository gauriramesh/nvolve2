import React, { useState } from "react";
import "./BasicInfo.css";
import { Event, eventRepeatOptions } from "../../services/eventServices";
import { Button, Container, Row, Col, Form, FormGroup, Label, Input } from "reactstrap";

export default class BasicInfo extends React.Component  {
    constructor(props) {
        super(props);

        this.repeatOptions = [];
        for(const option in eventRepeatOptions) {
            this.repeatOptions.push(<option>{option}</option>)
        }

        this.state = {
            repeatCycle: "None"
        };
    }

    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name] : value
        });
        console.log(this.state);
    }
    render() {
        return (
            <Container className="BasicInfo">
                <h3>Basic Info</h3>
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
                                    <Input name="publicDescription" type="textarea" id="privateDesc" rows="3" onChange={this.handleChange}/>
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
                                <Input name="minute" id="startMinute" placeholder="00" onChange={this.handleChange}/>
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
                                <Input name="endMinute" id="minute" placeholder="00" />
                            </Col>
                            <Col sm="3">
                                <FormGroup>
                                    <Input type="select" name="endAmPm" id="endAmPm">
                                        <option>AM</option>
                                        <option>PM</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                </Form>
                <Button size="lg" className="Button">Next: Location ></Button>
            </Container>
        );
    }
};