import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col, Row } from 'reactstrap';

class SubmitTrip extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userName: '',
			location: '',
			visitType: '',
			visitDate: '',
			recommend: '',
			tripText: '',
		};

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleRadioChange = this.handleRadioChange.bind(this);
	}

	handleInputChange(event) {
		const target = event.target;
		const name = target.name;
		const value = target.value;

		this.setState({
			[name]: value,
		});
	}

	handleRadioChange(event) {
		this.setState({
			recommend: event.target.value,
		});
	}

	handleSubmit(event) {
        alert('Current state is:' + JSON.stringify(this.state));
		console.log('Current state is:' + JSON.stringify(this.state));
		this.props.postTripReport(
			this.state.userName,
			this.state.location,
			this.state.visitType,
			this.state.visitDate,
			this.state.recommend,
			this.state.tripText
		);
		event.preventDefault();
		this.props.closeModal();
	}

	render() {
		return (
			<>
				<div className="container">
					<div className="row row-content">
						<div className="col-10 offset-md-1 pt-3">
							<h2>Share your Trip Report</h2>
							<hr />
						</div>
						<div className="col-md-10 offset-md-1 pb-3">
							<Form onSubmit={this.handleSubmit}>
								<FormGroup row>
									<Label htmlFor="userName" md={2}>
										Your Name
									</Label>
									<Col md={10}>
										<Input
											id="userName"
											value={this.state.userName}
											type="text"
											name="userName"
											placeholder="Enter name to display with your report"
											onChange={this.handleInputChange}
										/>
									</Col>
								</FormGroup>
								<FormGroup row>
									<Label htmlFor="location" md={2}>
										Location
									</Label>
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
									<Label htmlFor="visitType" md={2}>
										Visit Type
									</Label>
									<Col md={10}>
										<Input
											id="visitType"
											value={this.state.visitType}
											type="select"
											name="visitType"
											placeholder="please select"
											onChange={this.handleInputChange}
										>
											<option value="" disabled defaultValue>
												Select your option
											</option>
											<option value="singleLoc">Single Location</option>
											<option value="roundtripWater">Roundtrip Waterway Navigation</option>
											<option value="onewayWater">Oneway Waterway Navigation</option>
											<option value="other">Other</option>
										</Input>
									</Col>
								</FormGroup>
								<FormGroup row>
									<Label htmlFor="visitDate" md={2}>
										Visit Date
									</Label>
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
								<FormGroup row>
									<Label htmlFor="rating" md={2}>
										Would you recommend your visit to others?
									</Label>
									<Col md={{ size: 9, offset: 1 }}>
										<Row>
											<Label>
												<Input
													id="recYes"
													value="Yes"
													type="radio"
													name="recommend"
													checked={this.state.recommend === 'Yes'}
													onChange={this.handleRadioChange}
												/>
												Yes, I recommend my visit experience.
											</Label>
										</Row>
										<Row>
											<Label>
												<Input
													id="recNeut"
													value="Neutral"
													type="radio"
													name="recommend"
													checked={this.state.recommend === 'Neutral'}
													onChange={this.handleRadioChange}
												/>
												My visit experience was neutral.
											</Label>
										</Row>
										<Row>
											<Label>
												<Input
													id="recNo"
													value="No"
													type="radio"
													name="recommend"
													checked={this.state.recommend === 'No'}
													onChange={this.handleRadioChange}
												/>
												I do not recommend my visit to others.
											</Label>
										</Row>
									</Col>
								</FormGroup>
								<FormGroup row>
									<Label htmlFor="tripText" md={2}>
										Trip Report
									</Label>
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
								<FormGroup row>
									<Col md={{ size: 10, offset: 2 }}>
										<Button type="submit" color="dark">
											Submit Trip Report
										</Button>
									</Col>
								</FormGroup>
							</Form>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default SubmitTrip;
