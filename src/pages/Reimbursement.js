import React from "react";
import { Button, Container, Form, FormGroup, FormText, Input, Label, FormFeedback } from "reactstrap";

export default class ReimbursementForm extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			event: '',
			description: 'test',
			payTo: '',
			amount: '',
			file: '',
			mail: false,
			sofs: false,
			eventValid: false,
			descriptionValid: false,
			payToValid: false,
			amountValid: false,
			fileValid: false,
			deliveryFormatValid: false
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
		console.log(event.target.id + ": " + event.target.value);
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

	validateInput() {
		this.state.eventValid = this.isNotEmpty(this.state.event);
		this.state.descriptionValid = this.isNotEmpty(this.state.description);
		this.state.payToValid = this.isNotEmpty(this.state.payTo);
		this.state.amountValid = this.isNotEmpty(this.state.amount);
		this.state.fileValid = this.isNotEmpty(this.state.file) && this.isValidFileFormat(this.state.file);
		this.state.deliveryFormatValid = (this.state.mail == 'on' || this.state.sofs == 'on') && !(this.state.mail == 'on' && this.state.sofs == 'on');
	}

	render() {
		return (
			<Container>
				<Form>
					<FormGroup>
						<Label for="eventSelect">Event:</Label>
						<Input type="select" name="eventSelect" id="eventSelect" value={this.state.event} onChange={this.handleChange}>
							<option>Test</option>
						</Input>
					</FormGroup>
					<FormGroup>
						<Label for="eventDescription">Description:</Label>
						<Input type="textarea" name="eventDescription" id="eventDescription" value={this.state.description} onChange={this.handleChange}/>
					</FormGroup>
					<FormGroup>
						<Label for="payTo">Pay To:</Label>
						<Input type="text" name="payTo" id="payTo" value={this.state.payTo} onChange={this.handleChange}/>
					</FormGroup>
					<FormGroup>
						<Label for="amount">Amount:</Label>
						<Input type="text" name="amount" id="amount" value={this.state.amount} onChange={this.handleChange}/>
					</FormGroup>
					<FormGroup>
						<Label for="uploadReceipt">Upload Receipt:</Label>
						<Input type="file" name="uploadReceipt" id="uploadReceipt" value={this.state.file} onChange={this.handleChange}/>
						<FormText color="muted">
							Please upload a digital copy of the reciept in one of the following formats: .png, .jpg, .jpeg, .pdf 
						</FormText>
					</FormGroup>
					<FormGroup tag="fieldset">
						<legend>Delivery Format:</legend>
						<FormGroup check>
							<Label check>
								<Input type="radio" name="radio1" id="mail" onChange={this.handleChange}/>{' '}
								Mail
							</Label>
						</FormGroup>
						<FormGroup check>
							<Label check>
								<Input type="radio" name="radio1" id="sofs" onChange={this.handleChange}/>{' '}
								Pick up at SOFS Office
							</Label>
						</FormGroup>
					</FormGroup>
					<Button onClick={this.handleSubmit}>Submit</Button>
				</Form>
			</Container>
			);
	}
}