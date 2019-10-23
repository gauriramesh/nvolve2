import React, { useEffect, useState } from "react"; 
import { Button, ButtonGroup, Form, FormFeedback, Label, Input, } from 'reactstrap'; 

const TravelInsurance = (props) => {
    const [travelInsuranceSupplement, setTravelInsuranceSupplement] = useState({driver: null, passengers: null}); 
    const [invalidInputs, setInvalidInputs] = useState({ driver: false, passengers: false }); 
    const [shouldSave, setShouldSave] = useState(false); 

    useEffect(() => {
        const hasInvalidInput = (invalidInputs.driver || invalidInputs.passengers); 
        if (shouldSave && !hasInvalidInput){
            props.addSupplement("TRAVEL_INSURANCE", travelInsuranceSupplement); 
            props.changeSelected("None"); 
        } else {
            setShouldSave(false); 
        }
    }, [shouldSave]); 

    function save () {
        setInvalidInputs(() => ({
            driver: travelInsuranceSupplement.driver === null,
            passengers: travelInsuranceSupplement.passengers === null, 
        }));
        setShouldSave(true); 
    }

    return (
        <Form>
            <Label for="driver">Driver Name</Label>
            <Input id="driver" invalid={invalidInputs.driver} onChange={event => 
            {
                event.persist(); 
                setTravelInsuranceSupplement(prev => ({...prev, driver: event.target.value}))}
            }/>

            <hr />

            <Label for="passengers">Passenger Names</Label>
            <Input type="textarea" id="passengers" invalid={invalidInputs.passengers} onChange={event => 
            {
                event.persist();  
                setTravelInsuranceSupplement(prev => ({...prev, passengers: event.target.value}))}
            }/>

            <hr /> 

            <FormFeedback invalid>Please enter a driver and at least one passenger</FormFeedback>

            <ButtonGroup> 
                <Button color="secondary" onClick={() => {props.changeSelected("None"); }}>Cancel</Button>
                <Button color="primary" onClick={save}> Add</Button>
            </ButtonGroup>
        </Form>

    ); 
};

export default TravelInsurance; 