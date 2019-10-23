import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Input,
  Label,
  FormGroup,
  Form,
  Badge,
  Button
} from "reactstrap";
import CreatableSelect from "react-select/creatable";
import {
  PossibleEventLocations,
  OnCampusEventLocation,
  OffCampusEventLocation,
  PageOptions
} from "../services/eventServices";
import ProgressBar from "./ProgressBar"

export default class LocationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentlySelected: { label: "", value: "" },
      showError: false
    };

    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(element, { action }) {
    if (!element) return;
    const value = element.value;
    if (action === "create-option") {
      this.props.addLocation(new OffCampusEventLocation(value));
    } else if (action === "select-option") {
      this.props.addLocation(new OnCampusEventLocation(value));
    }

    this.setState({ currentlySelected: value });
  }

  validate = () => {
    if (this.props.locations.length === 0) {
      this.setState({ showError: true });
      return;
    } else {
      this.setState({ showError: false });
    }
    for (let location in this.props.locations) {
      if (location.studentsOnlyRuleAcknowledged !== undefined && !location.studentsOnlyRuleAcknowledged) {
        return;
      }
    }

    this.props.goToNextPage();
  }

  render() {
    return (
        <div>
            <ProgressBar currentPage={PageOptions.location}></ProgressBar>
            <Container>
                <Row style={{ padding: '20px', backgroundColor: '#f5f1e7', borderRadius: '10px' }}>
                <Col sm={{ size: 10, offset: 1 }}>
                    <CreatableSelect
                    isClearable
                    options={PossibleEventLocations}
                    placeholder="Search for a room"
                    value={this.state.currentlySelected}
                    onChange={this.onSelect}
                    formatCreateLabel={s => <label>Add "{s}"</label>}
                    />

                    {this.renderLocationList()}
                </Col>
                </Row>
                <div style={{ margin: '10px' }}>
                <Button color="primary" style={{ float: 'left', margin: '10px'}} onClick={this.props.goToPreviousPage}>
              &lt; Previous: Basic Info
            </Button>
            <Button color="primary" style={{ float: 'right', margin: '10px'}} onClick={this.validate}>Next: Supplements &gt;</Button>
                </div>
                
            </Container>
        </div>
    );
  }

  renderLocationList() {
    const { locations } = this.props;

    if (locations.length === 0) {
      return (
        <div>
          <h3 style={{ textAlign: "center" }}>No locations added.</h3>
          {this.state.showError && (
            <h5 className="text-danger" style={{textAlign: 'center'}}>You must add at least one location.</h5>
          )}
        </div>
      );
    }

    const jsx = [];

    for (let i = 0; i < locations.length; i++) {
      jsx.push(
        <Card key={i} style={{ marginTop: "20px" }}>
          <CardHeader>
            {locations[i].location}
            <Badge
              color="danger"
              style={{ float: "right", cursor: "pointer" }}
              onClick={() => this.props.removeLocation(i)}
            >
              Remove
            </Badge>
          </CardHeader>

          <CardBody>
            {locations[i].studentsOnlyRuleAcknowledged !== undefined && (
              <Form style={{ marginLeft: "5px" }}>
                <FormGroup>
                  <Input
                    id={"location-ack-" + i}
                    type="checkbox"
                    onChange={e =>
                      this.props.setLocationAcknowledged(i, e.target.checked)
                    }
                    checked={locations[i].studentsOnlyRuleAcknowledged}
                    invalid={!locations[i].studentsOnlyRuleAcknowledged}
                  />
                  <Label for={"location-ack-" + i} check>
                    I certify that this room will only be used by UNL students
                    and/or faculty.
                  </Label>
                </FormGroup>
              </Form>
            )}
            {locations[i].studentsOnlyRuleAcknowledged === undefined && (
              <p>Off Campus Location</p>
            )}
          </CardBody>
        </Card>
      );
    }

    return jsx;
  }
}
