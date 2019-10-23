import React from "react";
import { Event } from "../services/eventServices";
<<<<<<< HEAD
import BasicInfo from "./epr/BasicInfo";
=======
import LocationForm from "../components/LocationForm";
>>>>>>> ef1b08f65914a9934622094403b4ab85ad0b67f1

export default class Epr extends React.Component {
  constructor(props) {
    super(props);

    this.state = new Event();
    this.org = props.match.params.org;
<<<<<<< HEAD
=======

    this.addLocation = this.addLocation.bind(this);
    this.removeLocation = this.removeLocation.bind(this);
    this.setLocationAcknowledged = this.setLocationAcknowledged.bind(this);
>>>>>>> ef1b08f65914a9934622094403b4ab85ad0b67f1
  }

  addLocation(location) {
    const { locations } = this.state;
    locations.push(location);
    this.setState({ locations });
  }

<<<<<<< HEAD
=======
  removeLocation(index) {
    const { locations } = this.state;
    locations.splice(index, 1);
    this.setState({ locations });
  }

>>>>>>> ef1b08f65914a9934622094403b4ab85ad0b67f1
  addSupplement(supplement) {
    const { supplements } = this.state;
    supplements.push(supplement);
    this.setState({ supplements });
  }

  infoHandler = basicInfo => {
    for (const info in basicInfo) {
      if (basicInfo.hasOwnProperty(info) && this.state.hasOwnProperty(info)) {
        this.setState({
          [info]: basicInfo[info]
        });
      }
    }
  };
  setLocationAcknowledged(index, value) {
    const { locations } = this.state;

    locations[index].studentsOnlyRuleAcknowledged = value;

    this.setState({ locations });
  }

  render() {
    return (
      <div>
        <h1>Hello {this.org}</h1>
        <BasicInfo handler={this.infoHandler}></BasicInfo>
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
