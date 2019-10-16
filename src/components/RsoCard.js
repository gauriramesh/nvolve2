import React from "react";
import "./RsoCard.css";

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle
} from "reactstrap";

class RsoCard extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <div className="rso-card py-3 px-3">
        <div>
          <h2 className="rso-name">{this.props.rsoName}</h2>
        </div>
        <div className="task-dropdown">
          <Dropdown isOpen={this.state.dropdownOpen} className="task-dropdown" toggle={this.toggle}>
            <DropdownToggle outline color="secondary" caret>I would like to...</DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Plan an Event</DropdownItem>
              <DropdownItem>File a Reimbursement</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    );
  }
}
export default RsoCard;
