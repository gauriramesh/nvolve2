import React from "react";
import "./RsoCard.css";

import {
  Container,
  Row,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle
} from "reactstrap";

import { Redirect, Link } from "react-router-dom";

import { ReactComponent as Send } from "../send.svg";

class RsoCard extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.redirectToEpr = this.redirectToEpr.bind(this);
    this.redirectToReimbursement = this.redirectToReimbursement.bind(this);

    this.state = {
      dropdownOpen: false,
      eprRedirect: false,
      reimbursementRedirect: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  redirectToEpr() {
    this.setState(prevState => ({
      eprRedirect: true
    }));
  }

  redirectToReimbursement() {
    this.setState(prevState => ({
      reimbursementRedirect: true
    }));
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
              <Dropdown
                isOpen={this.state.dropdownOpen}
                className="w-100"
                toggle={this.toggle}
              >
                <DropdownToggle
                  outline
                  color="secondary"
                  className="w-100 text-left"
                  caret
                >
                  I would like to...
                </DropdownToggle>
                <DropdownMenu className="w-100">
                  <DropdownItem
                    className="dropdown-action"
                    onClick={this.redirectToEpr}
                  >
                    Plan an Event
                  </DropdownItem>
                  <DropdownItem
                    className="dropdown-action"
                    onClick={this.redirectToReimbursement}
                  >
                    File a Reimbursement
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
              {this.state.eprRedirect && (
                <Redirect
                  to={`/organizations/${this.props.rsoIdentifier}/epr`}
                />
              )}
              {this.state.reimbursementRedirect && (
                <Redirect
                  to={`/organizations/${this.props.rsoIdentifier}/reimbursement`}
                />
              )}
            </div>
          </Col>
          <Col md="3">
            <div className="goto-org">
              <Link
                to={`/organizations/${this.props.rsoIdentifier}/`}
                className="goto-link"
              >
                <Send
                  className="goto-icon"
                  width="64px"
                  height="64px"
                  fill="#6c757d"
                />
                <span className="goto-link-text">Go to Organization</span>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default RsoCard;
