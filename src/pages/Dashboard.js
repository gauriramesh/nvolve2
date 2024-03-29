import React from "react";
import { Container, Row, Col } from "reactstrap";

// Membership Imports
import RsoCard from "../components/RsoCard.js";
import { getRsos, getRsoInfo } from "../services/rsoServices.js";

// Notification Imports
import NotificationCard from "../components/NotificationCard.js";

import SuccessfullySubmitted from "../components/SuccessfullySubmitted.js";

const Dashboard = props => {
  const rsos = getRsos().map(rso => getRsoInfo(rso));

  return (
    <Container>
      {props.location && props.location.state && props.location.state.formSuccessfullySubmitted && (
        <SuccessfullySubmitted />
      )}
      <Row className="mt-5 mb-2">
        <Col md="12">
          <h1 className="display-2">Welcome to NVolve!</h1>
        </Col>
      </Row>
      <Row>
        <Col lg="8">
          <h6>MEMBERSHIPS</h6>
          <div className="mt-3">
            {rsos.map((rso, i) => {
              return (
                <div key={i} className="my-3">
                  <RsoCard rsoName={rso.name} rsoIdentifier={rso.identifier} />
                </div>
              );
            })}
          </div>
        </Col>
        <Col lg="4">
          <h6>NOTIFICATIONS ({props.notifications.length})</h6>
          <div className="mt-3">
            {props.notifications.map((notification, i) => {
              return (
                <div key={i} className="my-3">
                  <NotificationCard
                    title={notification.title}
                    content={notification.content}
                    rso={notification.rso}
                    closeNotificationCallback={() =>
                      props.clearNotification(notification)
                    }
                  />
                </div>
              );
            })}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
