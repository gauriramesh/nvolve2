import React from "react";
import { Button, Container, Form, FormGroup, FormText, Input, Label } from "reactstrap";

const Reimbursement = () => {
	return (
	<Container>
		<Form>
			<FormGroup>
				<Label for="eventSelect">Event:</Label>
				<Input type="select" name="eventSelect" id="eventSelect">
					<option>Test</option>
				</Input>
			</FormGroup>
			<FormGroup>
				<Label for="eventDescription">Description:</Label>
				<Input type="textarea" name="eventDescription" id="eventDescription" />
			</FormGroup>
			<FormGroup>
				<Label for="payTo">Pay To:</Label>
				<Input type="text" name="payTo" id="payTo" />
			</FormGroup>
			<FormGroup>
				<Label for="amount">Amount:</Label>
				<Input type="text" name="amount" id="amount" />
			</FormGroup>
			<FormGroup>
				<Label for="uploadReceipt">Upload Receipt:</Label>
				<Input type="file" name="uploadReceipt" id="uploadReceipt" />
				<FormText color="muted">
					Please upload a digital copy of the reciept in one of the following formats: .png, .jpg, .jpeg, .pdf 
				</FormText>
			</FormGroup>
			<FormGroup tag="fieldset">
				<legend>Delivery Format:</legend>
				<FormGroup check>
					<Label check>
						<Input type="radio" name="mail" />{' '}
						Mail
					</Label>
				</FormGroup>
				<FormGroup check>
					<Label check>
						<Input type="radio" name="sofs" />{' '}
						Pick up at SOFS Office
					</Label>
				</FormGroup>
			</FormGroup>
			<Button>Submit</Button>
		</Form>
	</Container>
	);
};

export default Reimbursement;