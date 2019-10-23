import React from "react";
import "./NotificationCard.css";
import { ReactComponent as Close } from "../close.svg";

const NotificationCard = props => {
  return (
    <div className="notification-card py-3 px-3">
      <div className="text-right close-button">
        <button onClick={props.closeNotificationCallback}>
          <Close width="24px" height="24px" />
        </button>
      </div>
      <div className="mb-3">
        <span className="notification-title">{props.title}</span>
        <br className="notification-separator" />
        <span className="notification-rso">{props.rso}</span>
      </div>
      <div className="notification-content">{props.content}</div>
    </div>
  );
};

export default NotificationCard;
