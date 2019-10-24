import React from "react";
import { Event } from "../services/eventServices";
import BasicInfo from "./epr/BasicInfo";
import LocationForm from "../components/LocationForm";
import Supplement from '../pages/supplements/Supplement'; 
import Review from './epr/Review';

export default class Epr extends React.Component {
  constructor(props) {
    super(props);

    this.state = new Event();
    this.org = props.match.params.org;
    this.state.currentForm = 1; 

    this.addLocation = this.addLocation.bind(this);
    this.removeLocation = this.removeLocation.bind(this);
    this.setLocationAcknowledged = this.setLocationAcknowledged.bind(this);
    this.updateSupplements = this.updateSupplements.bind(this); 
    this.nextForm = this.nextForm.bind(this); 
  }

  nextForm(){
    const {currentForm} = this.state; 
    this.setState({currentForm: currentForm+1}); 
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

  updateSupplements(supplements) {
    // I figured it would be cleaner, since supplements can theoretically contain quite a bit of information, to have a dictionary rather than an array
    // If we want to access the values as an array, of course we can just do Object.values or similar
    // I'm also doing most of the management (adding and deleting individual supplements) in the form itself.
    // So the update only gets pushed up to the global state when they move on to the next section
    this.setState({ supplements });
  }

  render() {
    return (
      <div>
        <h1>Hello {this.org}</h1>

        {this.state.currentForm === 1 && (
          <BasicInfo handler={this.infoHandler} nextForm={this.nextForm}></BasicInfo>
        )}

        {this.state.currentForm === 2 && (
          <LocationForm
            setLocationAcknowledged={this.setLocationAcknowledged}
            locations={this.state.locations}
            addLocation={this.addLocation}
            removeLocation={this.removeLocation}
            nextForm={this.nextForm}
          />
        )}

        {this.state.currentForm === 3 && (
          <Supplement updateSupplements={this.updateSupplements} nextForm={this.nextForm}/>
        )}
        {
            this.currentForm === 4 && 
            <Review info={this.state} org={this.org}></Review>
        }
        
      </div>
    );
  }
}
