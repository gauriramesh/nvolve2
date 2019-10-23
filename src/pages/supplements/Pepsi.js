import React, { useState } from "react";
import { Button, ButtonGroup, Form, Label, Input } from "reactstrap";

const Pepsi = props => {
  const [pepsiSupplement, setPepsiSupplement] = useState({
    numberPepsi: null,
    numberDietPepsi: null,
    numberMountainDew: null
  });

  return (
    <Form>
      <Label for="numberPepsi">How many boxes of Pepsi will you need?</Label>
      <Input
        type="number"
        id="numberPepsi"
        onChange={event => {
          event.persist();
          setPepsiSupplement(prev => ({
            ...prev,
            numberPepsi: event.target.value
          }));
        }}
      />

      <Label for="numberDietPepsi">
        How many boxes of Diet Pepsi will you need?
      </Label>
      <Input
        type="number"
        id="numberDietPepsi"
        onChange={event => {
          event.persist();
          setPepsiSupplement(prev => ({
            ...prev,
            numberDietPepsi: event.target.value
          }));
        }}
      />

      <Label for="numberMountainDew">
        How many boxes of Pepsi will you need?
      </Label>
      <Input
        type="number"
        id="numberMountainDew"
        onChange={event => {
          event.persist();
          setPepsiSupplement(prev => ({
            ...prev,
            numberMountainDew: event.target.value
          }));
        }}
      />

      <hr />

      <ButtonGroup>
        <Button
          color="secondary"
          onClick={() => {
            props.changeSelected("None");
          }}
        >
          Cancel
        </Button>
        <Button
          color="primary"
          onClick={() => {
            props.addSupplement("PEPSI", pepsiSupplement);
            props.changeSelected("None");
          }}
          disabled={
            !(
              pepsiSupplement.numberPepsi ||
              pepsiSupplement.numberDietPepsi ||
              pepsiSupplement.numberMountainDew
            )
          }
        >
          Add
        </Button>
      </ButtonGroup>
    </Form>
  );
};

export default Pepsi;
