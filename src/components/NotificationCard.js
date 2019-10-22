import React from "react"; 
import "./NotificationCard.css"; 

const NotificationCard = (props) => {

        return(
            <div className="notification-card py-3 px-3">
                <div className="mb-3">
                    <span className="notification-title">{props.title}</span>
                    <br className="notification-separator"/>
                    <span className="notification-rso">{props.rso}</span>
                </div>
                <div className="notification-content">
                    {props.content}
                </div>
            </div>
        ); 
}

export default NotificationCard; 