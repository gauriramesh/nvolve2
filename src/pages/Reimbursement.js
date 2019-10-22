import React from "react";
import { Button, Container, Form, FormGroup, FormText, Input, Label, FormFeedback } from "reactstrap";
import "./Reimbursement.css";

export default class ReimbursementForm extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			event: '',
			description: '',
			payTo: '',
			amount: '',
			file: '',
			mail: true,
			sofs: 'off',
			eventValid: true,
			descriptionValid: true,
			payToValid: true,
			amountValid: true,
			fileValid: true,
			deliveryFormatValid: true,
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		let field = '';
		switch (event.target.id) {
			case 'eventSelect':
				field = 'event';
				break;
			case 'eventDescription':
				field = 'description';
				break;
			case 'payTo':
				field = 'payTo';
				break;
			case 'amount':
				field = 'amount';
				break;
			case 'uploadReceipt':
				field = 'file';
				break;
			case 'mail':
				field = 'mail';
				this.setState({sofs: 'off'});
				break;
			case 'sofs':
				field = 'sofs';
				this.setState({mail: 'off'});
				break;
			default:
				break;
		}
		this.setState({[field]: event.target.value});
	}

	handleSubmit(event) {
		this.validateInput();
		console.log(this.state);
	}

	isNotEmpty(val) {
		return val != null && val != undefined && val != '';
	}

	isValidFileFormat(fp) {
		return fp.endsWith('.pdf') || fp.endsWith('.png') || fp.endsWith('.jpg') || fp.endsWith('.jpeg');
	}

	isValidAmount(val) {
		return (!isNaN(val) || (val.charAt(0) == '$' && !isNaN(val.substring(1)))) && (val.indexOf('.') < 0 || val.substring(val.indexOf('.')).length <= 3);
	}

	validateInput() {
		this.setState({eventValid: this.isNotEmpty(this.state.event)});
		this.setState({descriptionValid: this.isNotEmpty(this.state.description)});
		this.setState({payToValid: this.isNotEmpty(this.state.payTo)});
		this.setState({amountValid: (this.isNotEmpty(this.state.amount) && this.isValidAmount(this.state.amount))});
		this.setState({fileValid: this.isNotEmpty(this.state.file) && this.isValidFileFormat(this.state.file)});
		this.setState({deliveryFormatValid: (this.state.mail === 'on' && this.state.sofs === 'off') || (this.state.mail === 'off' && this.state.sofs === 'on')});
		console.log((this.state.mail === 'on' && this.state.sofs === 'off') || (this.state.mail === 'off' && this.state.sofs === 'on'));
	}

	render() {
		return (
			<Container>
				<h3>File a Reimbursement</h3>
				<br />

				<p><b>Organization:</b> Nebraskans for Cheese</p>
				<p><b>SOFS Number:</b> 1234</p>
				<Form>
					<FormGroup>
						<Label for="eventSelect">Event:</Label>
						<Input type="select" name="eventSelect" id="eventSelect" value={this.state.event} onChange={this.handleChange} invalid={!this.state.eventValid} placeholder="Choose an event">
							<option></option>
							<option>Trip to the UNL Dairy Store</option>
							<option>Trip to the Dairy Farm</option>
							<option>Cheese Tasting</option>
						</Input>
						<FormFeedback invalid="true">Please select an event.</FormFeedback>
					</FormGroup>
					<FormGroup>
						<Label for="eventDescription">Description:</Label>
						<Input type="textarea" name="eventDescription" id="eventDescription" value={this.state.description} onChange={this.handleChange} invalid={!this.state.descriptionValid}/>
						<FormFeedback invalid="true">Please provide a description of what the funds were used for.</FormFeedback>
					</FormGroup>
					<FormGroup>
						<Label for="payTo">Pay To:</Label>
						<Input type="text" name="payTo" id="payTo" value={this.state.payTo} onChange={this.handleChange} invalid={!this.state.payToValid}/>
						<FormFeedback invalid="true">Please provide the recipient of the reimbursement.</FormFeedback>
					</FormGroup>
					<FormGroup>
						<Label for="amount">Amount:</Label>
						<Input type="text" name="amount" id="amount" value={this.state.amount} onChange={this.handleChange} invalid={!this.state.amountValid}/>
						<FormFeedback invalid="true">Please provide a valid dollar amount (numeric value, no more than 2 digits after the decimal point).</FormFeedback>
					</FormGroup>
					<FormGroup>
						<Label for="uploadReceipt">Upload Receipt:</Label>
						<Input type="file" name="uploadReceipt" id="uploadReceipt" value={this.state.file} onChange={this.handleChange} invalid={!this.state.fileValid}/>
						<FormText color="muted">
							Please upload a digital copy of the receipt in one of the following formats: .png, .jpg, .jpeg, .pdf 
						</FormText>
						<FormFeedback invalid="true">Please upload a file in one of the following formats: .png, .jpg, .jpeg, .pdf.</FormFeedback>
					</FormGroup>
					<FormGroup tag="fieldset">
						<legend id="deliveryFormatLabel">Delivery Format:</legend>
						<FormGroup check>
							<Label check>
								<Input type="radio" name="radio1" id="mail" defaultChecked/>{' '}
								Mail
							</Label>
						</FormGroup>
						<FormGroup check>
							<Label check>
								<Input type="radio" name="radio1" id="sofs" />{' '}
								Pick up at SOFS Office
							</Label>
						</FormGroup>
					</FormGroup>
					<Button color="primary" onClick={this.handleSubmit}>Submit</Button>
				</Form>
			</Container>
			);
	}
}