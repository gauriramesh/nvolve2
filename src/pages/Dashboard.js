import React from "react";
import { Container, Row, Col } from "reactstrap";
import RsoCard from "../components/RsoCard.js";

const Dashboard = () => {
  return (
    <Container>
      <Row className="mt-5 mb-2">
        <Col md="12">
          <h1 className="display-2">Welcome to NVolve!</h1>
        </Col>
      </Row>
      <Row>
        <Col md="8">
          <h6>MEMBERSHIPS</h6>
          <div className="mt-3">
            <RsoCard rsoName="Nebraskans For Cheese" />
          </div>
        </Col>
        <Col md="4">
          <h6>NOTIFICATIONS</h6>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
