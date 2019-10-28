import React from "react";
import {
  Button,
  Container,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
  FormFeedback
} from "reactstrap";
import { getEvents } from '../services/eventServices';
import "./Reimbursement.css";

import { Redirect } from "react-router-dom";

export default class ReimbursementForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      event: "",
      description: "",
      payTo: "",
      amount: "",
      file: "",
      mail: true,
      sofs: false,
      eventValid: true,
      descriptionValid: true,
      payToValid: true,
      amountValid: true,
      fileValid: true,
      deliveryFormatValid: true,
      shouldRedirect: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let field = "";
    let value = event.target.value;
    switch (event.target.id) {
      case "eventSelect":
        field = "event";
        break;
      case "eventDescription":
        field = "description";
        break;
      case "payTo":
        field = "payTo";
        break;
      case "amount":
        field = "amount";
        break;
      case "uploadReceipt":
        field = "file";
        break;
      case "mail":
        field = "mail";
        value = true;
        this.setState({ sofs: false });
        break;
      case "sofs":
        field = "sofs";
        value = true;
        this.setState({ mail: false });
        break;
      default:
        break;
    }
    this.setState({ [field]: event.target.value });
  }

  handleSubmit(event) {
    if(this.validateInput()) {
      this.setState({shouldRedirect: true});
    }    
  }

  isNotEmpty(val) {
    return val !== null && val !== undefined && val !== "";
  }

  isValidFileFormat(fp) {
    return (
      fp.endsWith(".pdf") ||
      fp.endsWith(".png") ||
      fp.endsWith(".jpg") ||
      fp.endsWith(".jpeg")
    );
  }

  isValidAmount(val) {
    return (
      (!isNaN(val) || (val.charAt(0) === "$" && !isNaN(val.substring(1)))) &&
      (val.indexOf(".") < 0 || val.substring(val.indexOf(".")).length <= 3)
    );
  }

  validateInput() {
    let eventCheck = this.isNotEmpty(this.state.event);
    let descriptionCheck =  this.isNotEmpty(this.state.description);
    let payToCheck = this.isNotEmpty(this.state.payTo);
    let amountCheck = this.isNotEmpty(this.state.amount) && this.isValidAmount(this.state.amount);
    let fileCheck = this.isNotEmpty(this.state.file) && this.isValidFileFormat(this.state.file);
    let deliveryFormatCheck = (this.state.mail && !this.state.sofs) || (!this.state.mail && this.state.sofs);

    this.setState({ eventValid: eventCheck });
    this.setState({ descriptionValid: descriptionCheck });
    this.setState({ payToValid: payToCheck });
    this.setState({ amountValid: amountCheck });
    this.setState({ fileValid: fileCheck });
    this.setState({ deliveryFormatValid: deliveryFormatCheck });

    return eventCheck && descriptionCheck && payToCheck && amountCheck && fileCheck && deliveryFormatCheck;
  }

  render() {
    return (
      <Container>
        <h3>File a Reimbursement</h3>
        <br />

        <p>
          <b>Organization:</b> Nebraskans for Cheese
        </p>
        <p>
          <b>SOFS Number:</b> 1234
        </p>
		<p>
			<b> SOFS Balance:</b> $428.00
		</p>
        <Form>
          <FormGroup>
            <Label for="eventSelect">Event:</Label>
            <Input
              type="select"
              name="eventSelect"
              id="eventSelect"
              value={this.state.event}
              onChange={this.handleChange}
              invalid={!this.state.eventValid}
              placeholder="Choose an event"
            >
              <option></option>
              {getEvents('nebraskansforcheese').map(e => (<option key={e.name}>{e.name}</option>))}
            </Input>
            <FormFeedback invalid="true">Please select an event.</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="eventDescription">Description:</Label>
            <Input
              type="textarea"
              name="eventDescription"
              id="eventDescription"
              value={this.state.description}
              onChange={this.handleChange}
              invalid={!this.state.descriptionValid}
            />
            <FormFeedback invalid="true">
              Please provide a description of what the funds were used for.
            </FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="payTo">Pay To:</Label>
            <Input
              type="text"
              name="payTo"
              id="payTo"
              value={this.state.payTo}
              onChange={this.handleChange}
              invalid={!this.state.payToValid}
            />
            <FormFeedback invalid="true">
              Please provide the recipient of the reimbursement.
            </FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="amount">Amount:</Label>
            <Input
              type="text"
              name="amount"
              id="amount"
              value={this.state.amount}
              onChange={this.handleChange}
              invalid={!this.state.amountValid}
            />
            <FormFeedback invalid="true">
              Please provide a valid dollar amount (numeric value, no more than
              2 digits after the decimal point).
            </FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="uploadReceipt">Upload Receipt:</Label>
            <Input
              type="file"
              name="uploadReceipt"
              id="uploadReceipt"
              value={this.state.file}
              onChange={this.handleChange}
              invalid={!this.state.fileValid}
            />
            <FormText color="muted">
              Please upload a digital copy of the receipt in one of the
              following formats: .png, .jpg, .jpeg, .pdf
            </FormText>
            <FormFeedback invalid="true">
              Please upload a file in one of the following formats: .png, .jpg,
              .jpeg, .pdf.
            </FormFeedback>
          </FormGroup>
          <FormGroup tag="fieldset">
            <legend id="deliveryFormatLabel">Delivery Format:</legend>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" id="mail" defaultChecked />{" "}
                Mail
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" id="sofs" /> Pick up at SOFS
                Office
              </Label>
            </FormGroup>
          </FormGroup>
          <Label for="submitButton">
            NOTE: This will be sent to your advisor for approval
          </Label>
          <br />
          <Button
            color="primary"
            id="submitButton"
            name="submitButton"
            onClick={this.handleSubmit}
          >
            Submit
          </Button>
          {this.state.shouldRedirect && (
                <Redirect
                  push
                  to={{
                    pathname: "/",
                    state: { formSuccessfullySubmitted: true }
                  }}
                />
            )}
        </Form>
      </Container>
    );
  }
}
