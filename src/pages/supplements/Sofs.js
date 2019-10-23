import React, { useEffect, useState } from "react"; 
import { Button, ButtonGroup, Form, FormFeedback, Label, Input, } from 'reactstrap'; 

const Sofs = (props) => {
    const [sofsSupplement, setSofsSupplement] = useState({budgetDescription: null, budgetFile: null}); 
    const [invalidInputs, setInvalidInputs] = useState({ budgetDescription: false, budgetFile: false }); 
    const [shouldSave, setShouldSave] = useState(false); 

    useEffect(() => {
        const hasInvalidInput = (invalidInputs.budgetDescription || invalidInputs.budgetFile); 
        if (shouldSave && !hasInvalidInput){
            props.addSupplement("SOFS", sofsSupplement); 
            props.changeSelected("None"); 
        } else {
            setShouldSave(false); 
        }
    }, [shouldSave]); 

    function save () {
        setInvalidInputs(() => ({
            budgetDescription: (sofsSupplement.budgetDescription === null),
            budgetFile: (sofsSupplement.budgetFile === null || !sofsSupplement.budgetFile.match('.(pdf|csv|xlsx|jpg|jpeg|png)$')), 
        }));
        setShouldSave(true); 
    }

    return (
        <Form>
            <Label for="budgetDescription">Budget Description</Label>
            <Input type="textarea" id="budgetDescription" invalid={invalidInputs.budgetDescription} onChange={event => 
            {
                event.persist(); 
                setSofsSupplement(prev => ({...prev, budgetDescription: event.target.value})) }
            }/>

            <hr />

            <Label for="budgetUpload">Please upload your budget</Label>
            <Input type="file" id="budgetUpload" invalid={invalidInputs.budgetFile} onChange={event => 
                {
                    event.persist(); 
                    setSofsSupplement(prev => ({...prev, budgetFile: event.target.value}))}
                }/>

            <hr />

            <FormFeedback>Please enter a budget description and a budget file of type pdf, csv, xlsx, jpeg, jpg, or png</FormFeedback>

            <ButtonGroup> 
                <Button color="secondary" onClick={() => {props.changeSelected("None"); }}>Cancel</Button>
                <Button color="primary" onClick={save}>Add</Button>
            </ButtonGroup>
        </Form>

    ); 
};

export default Sofs; 