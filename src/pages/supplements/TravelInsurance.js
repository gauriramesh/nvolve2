import React, { useState } from "react"; 
import { Button, ButtonGroup, Form, Label, Input, } from 'reactstrap'; 

const TravelInsurance = (props) => {
    const [travelInsuranceSupplement, setTravelInsuranceSupplement] = useState({driver: "", passengers: ""}); 

    return (
        <Form>
            <Label for="driver">Driver Name</Label>
            <Input id="driver" onChange={event => 
            {
                event.persist(); 
                setTravelInsuranceSupplement(prev => ({...prev, driver: event.target.value}))}
            }/>

            <hr />

            <Label for="passengers">Passenger Names</Label>
            <Input type="textarea" id="passengers" onChange={event => 
            {
                event.persist();  
                setTravelInsuranceSupplement(prev => ({...prev, passengers: event.target.value}))}
            }/>

            <hr /> 
            
            <ButtonGroup> 
                <Button color="secondary" onClick={() => {props.changeSelected("None"); }}>Cancel</Button>
                <Button color="primary" onClick={() => {props.addSupplement("TRAVEL_INSURANCE", travelInsuranceSupplement); props.changeSelected("None"); }} 
                disabled={!(travelInsuranceSupplement.driver && travelInsuranceSupplement.passengers)}>Add</Button>
            </ButtonGroup>
        </Form>

    ); 
};

export default TravelInsurance; 