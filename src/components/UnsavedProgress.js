import React, { useState } from "react";
import "./UnsavedProgress.css";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import { Redirect } from "react-router-dom";

const UnsavedProgress = props => {
  const [open, setOpen] = useState(true);
  const [redirect, setRedirect] = useState(false);

  return (
    <Modal isOpen={open}>
      <ModalHeader className="unsaved-progress-text">Are you sure you want to leave?</ModalHeader>
      <ModalBody className="unsaved-progress-text">
        Hey there!
        <br />
        <br />
        It looks like you are working on a form and haven't yet saved your
        changes. Are you sure you want to leave this page? The information
        entered into the form will be lost.
      </ModalBody>
      <ModalFooter className="unsaved-progress-text">
        <Button color="secondary" onClick={() => setRedirect(true)}>
          Leave
        </Button>
        <Button color="danger" onClick={() => setOpen(false)}>
          Stay Here
        </Button>
      </ModalFooter>
      {redirect && <Redirect to={props.destinationIfConfirmed} />}
    </Modal>
  );
};

export default UnsavedProgress;
