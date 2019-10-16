import React from "react";
import { Container, Row, Col } from "reactstrap";

const Dashboard = () => {
  return (
    <Container>
      <Row>
        <Col md="12">
          <h1 className="display-3">Welcome to NVolve!</h1>
        </Col>
      </Row>
      <Row>
        <Col md="8">
          <h6>MEMBERSHIPS</h6>
        </Col>
        <Col md="4">
          <h6>NOTIFICATIONS</h6>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
