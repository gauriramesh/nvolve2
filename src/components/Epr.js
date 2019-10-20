import React from 'react';
import { Event } from '../services/eventServices';
import Supplement from '../pages/supplements/Supplement'; 

export default class Epr extends React.Component {
    constructor(props) {
        super(props);

        this.state = new Event();
        this.org = props.match.params.org;
    }

    addLocation(location) {
        const { locations } = this.state;
        locations.push(location);
        this.setState({ locations });
    }

    updateSupplements(supplements) {
        // I figured it would be cleaner, since supplements can theoretically contain quite a bit of information, to have a dictionary rather than an array
        // If we want to access the values as an array, of course we can just do Object.values or similar
        // I'm also doing most of the management (adding and deleting individual supplements) in the form itself. 
        // So the update only gets pushed up to the global state when they move on to the next section
        this.setState({ supplements: supplements });
    }

    render() {
        return (
            <div>
                <Supplement org={this.org} updateSupplements={this.updateSupplements.bind(this)} />
            </div>
        );
    }
}