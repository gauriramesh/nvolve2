import React, { useState } from "react";
import "./Unimplemented.css";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const Unimplemented = () => {
  const [open, setOpen] = useState(true);

  return (
    <Modal isOpen={open} toggle={() => setOpen(false)}>
      <ModalHeader className="unimplemented-text">We're sorry!</ModalHeader>
      <ModalBody className="unimplemented-text">
        The feature you are trying to use is not yet implemented. We are always
        working to improve the NVolve2 experience, so keep checking back for new
        features!
        <br />
        <br />
        Thanks!
        <br />
        The NVolve2 Team
      </ModalBody>
      <ModalFooter className="unimplemented-text">
        <Button color="danger" onClick={() => setOpen(false)}>
          OK
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default Unimplemented;
