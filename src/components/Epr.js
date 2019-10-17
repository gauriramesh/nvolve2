import React from 'react';
import { Event } from '../services/eventServices';
import BasicInfo from './epr/BasicInfo';

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

    basicInfoHandler = (basicInfo) => {
        for(const info in basicInfo) {
            if(basicInfo.hasOwnProperty(info) && this.state.hasOwnProperty(info)) {
                this.setState({
                    [info] : basicInfo[info]
                });
            }
        }
    }

    render() {
        return (
            <div>
                <BasicInfo handler={this.basicInfoHandler}></BasicInfo>
            </div>
        );
    }
}