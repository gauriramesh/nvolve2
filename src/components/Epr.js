import React from 'react';
import { Event } from '../services/eventServices';

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

    addSupplement(supplement) {
        const { supplements } = this.state;
        supplements.push(supplement);
        this.setState({ supplements });
    }

    render() {
        return (
            <div>
                <h1>Hello {this.org}</h1>
            </div>
        );
    }
}