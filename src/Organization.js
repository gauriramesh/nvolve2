import React from "react";
import "./Organization.css";

const One = () => {
  return (
    <div>
      <h1>One!</h1>
    </div>
  );
};

const Two = () => {
  return (
    <div>
      <h1>Two!</h1>
    </div>
  );
};

const Organization = props => {
  const { org } = props.match.params;
  let component;

  if (org === "test") {
    component = <One />;
  } else {
    component = <Two />;
  }

  return org === "test" ? <One /> : <Two />;
};

export default Organization;
