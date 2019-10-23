import React, { useEffect, useState } from "react"; 
import { Button, ButtonGroup, Form, Label, Input, } from 'reactstrap'; 
import { anyTypeAnnotation } from "@babel/types";

const Pepsi = (props) => {
    const [pepsiSupplement, setPepsiSupplement] = useState({numberPepsi: null, numberDietPepsi: null, numberMountainDew: null}); 
    const [invalidInputs, setInvalidInputs] = useState({ numberPepsi: false, numberDietPepsi: false, numberMountainDew: false }); 
    const [shouldSave, setShouldSave] = useState(false); 

    useEffect(() => {
        const hasInvalidInput = (invalidInputs.numberPepsi || invalidInputs.numberDietPepsi || invalidInputs.numberMountainDew); 
        if (shouldSave && !hasInvalidInput){
            props.addSupplement("PEPSI", pepsiSupplement); 
            props.changeSelected("None"); 
        } else {
            setShouldSave(false); 
        }
    }, [shouldSave]); 

    function checkInputValidity () {
        setInvalidInputs(() => ({
            numberPepsi: (pepsiSupplement.numberDietPepsi === null || pepsiSupplement.numberDietPepsi < 0),
            numberDietPepsi: (pepsiSupplement.numberDietPepsi === null || pepsiSupplement.numberDietPepsi < 0), 
            numberMountainDew: (pepsiSupplement.numberMountainDew === null || pepsiSupplement.numberMountainDew < 0)
        }));
        
        setShouldSave(true); 
    }

    return (
        <Form>
            <Label for="numberPepsi">How many boxes of Pepsi will you need?</Label>
            <Input type="number" id="numberPepsi" invalid={invalidInputs.numberPepsi } onChange={event => 
                {
                    event.persist(); 
                    setPepsiSupplement(prev => ({...prev, numberPepsi: event.target.value})) }
                }
            />

            <Label for="numberDietPepsi">How many boxes of Diet Pepsi will you need?</Label>
            <Input type="number" id="numberDietPepsi" invalid={invalidInputs.numberDietPepsi } onChange={event => 
                {
                    event.persist(); 
                    setPepsiSupplement(prev => ({...prev, numberDietPepsi: event.target.value})) }
                }
            />

            <Label for="numberMountainDew">How many boxes of Pepsi will you need?</Label>
            <Input type="number" id="numberMountainDew" invalid={invalidInputs.numberMountainDew } onChange={event => 
                {
                    event.persist(); 
                    setPepsiSupplement(prev => ({...prev, numberMountainDew: event.target.value})) }
                }
            />

            <hr /> 

            <ButtonGroup> 
                <Button color="secondary" onClick={() => {props.changeSelected("None"); }}>Cancel</Button>
                <Button color="primary" onClick={checkInputValidity}>Add</Button>
            </ButtonGroup>
        </Form>

    ); 
};

export default Pepsi; 