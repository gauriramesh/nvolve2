import React from "react";
import "./RsoCard.css";

import {
  Container,
  Row,
  Col,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle
} from "reactstrap";

import {
  Redirect,
  Link
} from "react-router-dom";

import {ReactComponent as Send} from "../send.svg"; 

class RsoCard extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.redirectToEpr = this.redirectToEpr.bind(this); 
    this.redirectToReimbursement = this.redirectToReimbursement.bind(this); 

    this.state = {
      dropdownOpen: false,
      eprRedirect: false, 
      reimbursementRedirect: false,
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  redirectToEpr() {
    this.setState(prevState => ({
      eprRedirect: true,
    })); 
  }

  redirectToReimbursement() {
    this.setState(prevState => ({
      reimbursementRedirect: true,
    }))
  }

  render() {
    return (
      <Container className="rso-card py-3 px-3">
        <Row>
          <Col md="9">
            <div>
              <h2 className="rso-name">{this.props.rsoName}</h2>
            </div>
            <div className="task-dropdown">
              <Dropdown isOpen={this.state.dropdownOpen} className="w-100" toggle={this.toggle}>
                <DropdownToggle outline color="secondary" className="w-100 text-left" caret>I would like to...</DropdownToggle>
                <DropdownMenu className="w-100">
                  <DropdownItem className="dropdown-action" onClick={this.redirectToEpr}>Plan an Event</DropdownItem>
                  <DropdownItem className="dropdown-action" onClick={this.redirectToReimbursement}>File a Reimbursement</DropdownItem>
                </DropdownMenu>
              </Dropdown>
              {this.state.eprRedirect && <Redirect to={`${this.props.rsoIdentifier}/epr`} />}
              {this.state.reimbursementRedirect && <Redirect to={`${this.props.rsoIdentifier}/reimbursement`} />}
            </div>
          </Col>
          <Col md="3">
            <div className="goto-org">
              <Link className="goto-link">
                <Send className="goto-icon" width="100px" height="100px" fill="#000"/>
                <p className="goto-link-text">Go to Organization</p>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default RsoCard;
