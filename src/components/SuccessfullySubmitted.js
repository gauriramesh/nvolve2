import React, { useState, useEffect } from "react";
import "./SuccessfullySubmitted.css";

import {
    Modal, 
    ModalHeader,
    ModalBody
} from 'reactstrap'; 

const SuccessfullySubmitted = () => {
    
    const [open, setOpen] = useState(true); 

    useEffect(() => {
        const interval = setInterval(() => {
            setOpen(false); 
        }, 60000); 
        return () => clearInterval(interval);
    });
    
    return(
        <Modal className="success-modal" isOpen={open} backdrop={false}>
            <ModalHeader>Successfully Submitted!</ModalHeader>
        </Modal>
    ); 
}
export default SuccessfullySubmitted; 