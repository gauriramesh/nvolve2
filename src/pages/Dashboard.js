import React from "react";
import { Container, Row, Col } from "reactstrap";

// Membership Imports
import RsoCard from "../components/RsoCard.js";
import { getRsos, getRsoInfo } from "../services/rsoServices.js";

// Notification Imports
import NotificationCard from "../components/NotificationCard.js";
import { getNotifications } from "../services/notificationServices.js";

const Dashboard = () => {

  const rsos = getRsos().map(rso => getRsoInfo(rso)); 
  const notifications = getNotifications(); 

  return (
    <Container>
      <Row className="mt-5 mb-2">
        <Col md="12">
          <h1 className="display-2">Welcome to NVolve!</h1>
        </Col>
      </Row>
      <Row>
        <Col lg="8">
          <h6>MEMBERSHIPS</h6>
          <div className="mt-3">
            { rsos.map((rso, i) => {
              return(<div className="my-3"><RsoCard rsoName={rso.name} rsoIdentifier={rso.identifier} key={i}/></div>); 
            })
          }
          </div>
        </Col>
        <Col lg="4">
          <h6>NOTIFICATIONS ({notifications.length})</h6>
          <div className="mt-3">
            { notifications.map((notification, i) => {
              return(<div className="my-3"><NotificationCard title={notification.title} content={notification.content} rso={notification.rso}/></div>)
            })}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
