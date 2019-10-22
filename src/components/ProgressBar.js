import React from "react";
import "./ProgressBar.css";

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);

    const currentPage = this.props.currentPage;
    document.getElementById(currentPage).classList.add("active");
  }
  render() {
    return (
      <div className="msform">
          <ul id="progressbar">
                      <li ref="basicInfo" class="active">Basic Info</li>
                      <li ref="location">Location</li>
                      <li ref="supplements">supplements</li>
                      <li ref="review">Review and Submit</li>
          </ul>
      </div>
    );
  }
};

export default ProgressBar;
