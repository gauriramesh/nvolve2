import React from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody, Input, Label } from 'reactstrap';
import CreatableSelect from 'react-select/creatable';
import { PossibleEventLocations, OnCampusEventLocation, OffCampusEventLocation } from '../services/eventServices';

export default class LocationForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentlySelected: { label: '', value: '' }
        }
    }

    onSelect(value, action) {
        if (action === 'create-option') {
            this.props.addLocation(new OffCampusEventLocation(value));
        } else if (action === 'select-option') {
            this.props.addLocation(new OnCampusEventLocation(value.value));
        }

        this.setState({ currentlySelected: value });
    }

    onAcknowledgeStudentAgreement(index) {
        this.props.markLocationAsAcknowledged(index);
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col sm={{ size: 8, offset: 2 }}>
                        <CreatableSelect
                            isClearable
                            options={PossibleEventLocations}
                            placeholder="Search for a room"
                            value={this.state.currentlySelected} />
                        
                        {this.renderLocationList()}
                    </Col>
                </Row>
            </Container>
        );
    }

    renderLocationList() {
        const { locations } = this.props;

        if (locations.length === 0) {
            return (
                <h2>No locations added.</h2>
            );
        }

        const jsx = [];

        for (let i = 0; i < locations.length; i++) {
            jsx.push(
                <Card key={i}>
                    <CardHeader>
                        {locations[i].location}
                    </CardHeader>
                    {locations[i].studentsOnlyRuleAcknowledged !== undefined &&
                    <CardBody>
                        <Label check>
                            <Input
                                type="checkbox"
                                onChange={e => this.props.setLocationAckowledged(i, e.target.checked)}
                                checked={locations[i].studentsOnlyRuleAcknowledged}
                                valid={locations[i].studentsOnlyRuleAcknowledged}
                                />
                            I certify that this room will only be used by UNL students and/or faculty.
                        </Label>
                    </CardBody>
                    }
                </Card>
            )
        }
    }
}