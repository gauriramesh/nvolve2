import React, { useState, useEffect } from "react";
import "./SuccessfullySubmitted.css";

import {
    Modal, 
    ModalBody,
    Container, 
    Row,
    Col
} from 'reactstrap'; 

import {ReactComponent as Check} from '../check.svg'; 

// Determines the amount of time that the modal is open upon trigger.
const SUCCESS_CONFIRMATION_DURATION = 2500;

const SuccessfullySubmitted = () => {
    
    const [open, setOpen] = useState(true); 

    useEffect(() => {
        const interval = setInterval(() => {
            setOpen(false); 
        }, SUCCESS_CONFIRMATION_DURATION); 
        return () => clearInterval(interval);
    });
    
    return(
        <Modal className="success-modal" isOpen={open} backdrop={false}>
            <Container>
                <Row className="align-items-center">
                    <Col md="10">
                        <ModalBody className="success-modal-content">
                        Successfully Submitted!
                        </ModalBody>
                    </Col>
                    <Col className="text-center" md="2">
                        <Check className="my-1" fill="#FFF" width="48px" height="48px"/>
                    </Col>
                </Row>
            
            </Container>
        </Modal>
    ); 
}
export default SuccessfullySubmitted; 