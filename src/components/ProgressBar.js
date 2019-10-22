import React from "react";
import "./ProgressBar.css";
import { PageOptions } from "../services/eventServices";

class ProgressBar extends React.Component {

  componentDidMount() {
    const currentPage = this.props.currentPage;
    const pageArr = Object.values(PageOptions);
    for(let i = 0; i < pageArr.length; i++) {
      document.getElementById(pageArr[i]).classList.add("active");
      if(pageArr[i] === currentPage) {
        break;
      }
    }
  }

  render() {
    return (
      <div className="progressBarContainer">
          <ul id="progressBar">
              <li id={PageOptions.basicInfo}>Basic Info</li>
              <li id={PageOptions.location}>Location</li>
              <li id={PageOptions.supplements}>supplements</li>
              <li id={PageOptions.review}>Review and Submit</li>
          </ul>
      </div>
    );
  }
};

export default ProgressBar;
