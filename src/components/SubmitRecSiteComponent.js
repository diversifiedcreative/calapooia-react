import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';

// should be a link or modal on page that shows trip reports. Submit should redirect back to trip reports.

// Needs work on responsiveness at narrow sizes: radio buttons break.

class SubmitRecSite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            email: '',
            location: '',
            text: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleRadioChange = this.handleRadioChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value
        })
    }

    // handleRadioChange(event) {
    //     this.setState({
    //         recommend: event.target.value
    //     });
    // }

    handleSubmit(event) {
        console.log("Current state is:" + JSON.stringify(this.state));
        this.props.postUserRecSite(this.state.userName, this.state.email, this.state.location, this.state.text);
        event.preventDefault();
        this.props.closeModal();
    }

    render() {
        return(
            <>
                <div className="container">
                    <div className="row row-content">
                        <div className="col-10 offset-md-1 pt-3">
                            <h2>Propose a Route</h2>
                            <hr />
                            <p>Submit a recreation site you have visited on the Calapooia for moderation and publication. Please provide as much relevant information as possible and be patient as site administrators review, edit, and publish submissions.</p>
                        </div>
                        <div className="col-md-10 offset-md-1 pb-3">
                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup row>
                                    <Label htmlFor="userName" md={2}>Your Name</Label>
                                    <Col md={10}>
                                        <Input
                                            id="userName"
                                            value={this.state.name}
                                            type="text"
                                            name="userName"
                                            placeholder="Enter name to display with your report"
                                            onChange={this.handleInputChange}
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="email" md={2}>Email</Label>
                                    <Col md={10}>
                                        <Input
                                            id="email"
                                            value={this.state.email}
                                            type="text"
                                            name="email"
                                            placeholder="Email will not be published but is required"
                                            onChange={this.handleInputChange}
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="location" md={2}>Location</Label>
                                    <Col md={10}>
                                        <Input
                                            id="location"
                                            value={this.state.location}
                                            type="text"
                                            name="location"
                                            placeholder="Where did you visit?"
                                            onChange={this.handleInputChange}
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="text" md={2}>Description of Site</Label>
                                    <Col md={10}>
                                        <Input
                                            id="text"
                                            value={this.state.text}
                                            type="textarea"
                                            name="text"
                                            placeholder="Describe the location you visited."
                                            onChange={this.handleInputChange}
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="dark">
                                        Submit Rec Site
                                    </Button>
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

export default SubmitRecSite;