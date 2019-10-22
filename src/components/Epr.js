import React from "react";
import { Event } from "../services/eventServices";

export default class Epr extends React.Component {
  constructor(props) {
    super(props);

    this.state = new Event();
    this.org = props.match.params.org;

    this.addLocation = this.addLocation.bind(this);
    this.removeLocation = this.removeLocation.bind(this);
    this.setLocationAcknowledged = this.setLocationAcknowledged.bind(this);
  }

  addLocation(location) {
    const { locations } = this.state;
    locations.push(location);
    this.setState({ locations });
  }

  removeLocation(index) {
    const { locations } = this.state;
    locations.splice(index, 1);
    this.setState({ locations });
  }

  addSupplement(supplement) {
    const { supplements } = this.state;
    supplements.push(supplement);
    this.setState({ supplements });
  }

  setLocationAcknowledged(index, value) {
    const { locations } = this.state;

    locations[index].studentsOnlyRuleAcknowledged = value;

    this.setState({ locations });
  }

  render() {
    return (
      <div>
        <h1>Hello {this.org}</h1>
        <LocationForm
          setLocationAcknowledged={this.setLocationAcknowledged}
          locations={this.state.locations}
          addLocation={this.addLocation}
          removeLocation={this.removeLocation}
        />
      </div>
    );
  }
}
