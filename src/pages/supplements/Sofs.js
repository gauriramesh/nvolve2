import React, { useState } from "react"; 
import { Button, ButtonGroup, Form, Label, Input, } from 'reactstrap'; 

const Sofs = (props) => {
    const [sofsSupplement, setSofsSupplement] = useState({budgetDescription: null, budgetFile: null}); 

    return (
        <Form>
            <Label for="budgetDescription">Budget Description</Label>
            <Input type="textarea" id="budgetDescription" onChange={event => 
            {
                event.persist(); 
                setSofsSupplement(prev => ({...prev, budgetDescription: event.target.value})) }
            }/>

            <hr />

            <Label for="budgetUpload">Please upload your budget</Label>
            <Input type="file" id="budgetUpload" onChange={event => 
                {
                    event.persist(); 
                    setSofsSupplement(prev => ({...prev, budgetFile: event.target.value}))}
                }/>

            <hr />

            <ButtonGroup> 
                <Button color="secondary" onClick={() => {props.changeSelected("None"); }}>Cancel</Button>
                <Button color="primary" onClick={() => {props.addSupplement("SOFS", sofsSupplement); props.changeSelected("None"); }} disabled={!(sofsSupplement.budgetDescription && sofsSupplement.budgetFile)}>Add</Button>
            </ButtonGroup>
        </Form>

    ); 
};

export default Sofs; 