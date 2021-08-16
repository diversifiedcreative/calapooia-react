import React, { Component } from 'react';
import ReactStars from 'react-stars';
import { Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Col, FormFeedback } from 'reactstrap';
import { Link } from 'react-router-dom';

class SubmitTrip extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            visitType: '',
            visitDate: '',
            rating: '',
            tripText: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        console.log("Current state is:" + JSON.stringify(this.state));
        alert("Current state is:" + JSON.stringify(this.state));
        event.preventDefault();
    }

    render() {
        return(
            <>
                <div className="container">
                    <div className="row row-content">
                        <div className="col-12">
                            <h2>Share your Trip Report</h2>
                            <hr />
                        </div>
                        <div className="col-md-10">
                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup row>
                                    <Label htmlFor="name" md={2}>Name</Label>
                                    <Col md={10}>
                                        <Input
                                            id="name"
                                            value={this.state.name}
                                            type="text"
                                            name="name"
                                            placeholder="Name"
                                            onChange={this.handleInputChange}
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="visitType" md={2}>Visit Type</Label>
                                    <Col md={10}>
                                        <Input
                                            id="visitType"
                                            value={this.state.visitType}
                                            type="select"
                                            name="visitType"
                                            placeholder="please select"
                                            onChange={this.handleInputChange}
                                        >
                                            <option value="singleLoc">Single Location</option>
                                            <option value="roundtripWater">Roundtrip Waterway Navigation</option>
                                            <option value="onewayWater">Oneway Waterway Navigation</option>
                                            <option value="other">Other</option>
                                        </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="visitDate" md={2}>Visit Date</Label>
                                    <Col md={10}>
                                        <Input
                                            id="visitDate"
                                            value={this.state.visitDate}
                                            type="date"
                                            name="visitDate"
                                            placeholder="date placeholder"
                                            onChange={this.handleInputChange}
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="rating" md={2}>Rating</Label>
                                    <Col md={10}>
                                        <ReactStars
                                            id="rating"
                                            value={this.state.rating}
                                            count={5}
                                            size={24}
                                            color1={'A9A9A9'}
                                            color2={'E00000'}
                                            onChange={this.handleInputChange}
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="tripText" md={2}>Trip Report</Label>
                                    <Col md={10}>
                                        <Input
                                            id="tripText"
                                            value={this.state.tripText}
                                            type="textarea"
                                            rows={5}
                                            name="tripText"
                                            placeholder="Write your report here."
                                            onChange={this.handleInputChange}
                                        />
                                    </Col>
                                </FormGroup>
                            </Form>
                        </div>
                    </div>
                </div>
            </>
        )
    }
};

export default SubmitTrip;