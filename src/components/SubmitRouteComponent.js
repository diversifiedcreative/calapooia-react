import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';

// should be a link or modal on page that shows trip reports. Submit should redirect back to trip reports.

// Needs work on responsiveness at narrow sizes: radio buttons break.

class SubmitRoute extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            email: '',
            startLoc: '',
            endLoc: '',
            rapidClass: '',
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
        this.props.postUserRoute(this.state.userName, this.state.email, this.state.startLoc, this.state.endLoc, this.state.rapidClass, this.state.text);
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
                            <p>Submit a runnable route on the Calapooia for moderation and publication. Please provide as much relevant information as possible and be patient as site administrators review submissions.</p>
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
                                    <Label htmlFor="startLoc" md={2}>Put-In Location</Label>
                                    <Col md={10}>
                                        <Input
                                            id="startLoc"
                                            value={this.state.startLoc}
                                            type="text"
                                            name="startLoc"
                                            placeholder="Where did you start your run?"
                                            onChange={this.handleInputChange}
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="endLoc" md={2}>Take-Out Location</Label>
                                    <Col md={10}>
                                        <Input
                                            id="endLoc"
                                            value={this.state.endLoc}
                                            type="text"
                                            name="endLoc"
                                            placeholder="Where did you end your run?"
                                            onChange={this.handleInputChange}
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="rapidClass" md={2}>Difficulty/Rapid Class</Label>
                                    <Col md={10}>
                                        <Input
                                            id="rapidClass"
                                            value={this.state.rapidClass}
                                            type="text"
                                            name="rapidClass"
                                            placeholder="Please suggest class rating of rapids"
                                            onChange={this.handleInputChange}
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="text" md={2}>Description of Run</Label>
                                    <Col md={10}>
                                        <Input
                                            id="text"
                                            value={this.state.text}
                                            type="textarea"
                                            name="text"
                                            placeholder="Describe the run."
                                            onChange={this.handleInputChange}
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="dark">
                                        Submit River Route
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

export default SubmitRoute;