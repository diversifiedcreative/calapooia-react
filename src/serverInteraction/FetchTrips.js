import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';

import axios from 'axios';
import { baseUrl } from '../config';

function RenderTripReport({ tripReport }) {
	if (tripReport) {
		return (
			<div className="render-cont container">
				<div className="render-row row">
					<div className="render-head col-sm-7 offset-1">{tripReport.location}</div>
                    <div><strong>Date of Visit:</strong> {tripReport.visitDate}</div>
				</div>
				<div className="render-row row">
					<div className="render-left col-sm-5">
						<div className="render-sub">
							<strong>User: </strong>
							{tripReport.userName} <br /><strong>Recommendation: </strong>
							{tripReport.recommend} ({tripReport.visitDate})
						</div>
					</div>
					<div className="render-right col-sm-7">
						<p>{tripReport.tripText}</p>
					</div>
				</div>
			</div>
		);
	}
	return <div />;
}

function FetchTrips() {
	const [tripReports, setTripReports] = useState([]);

	useEffect(() => {
		axios
			.get(`${baseUrl}tripreports`)
			.then((res) => {
				console.log(res);
				setTripReports(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<>
			{tripReports.map((tripReport) => (
				<Container key={tripReport.id}>
					<Row tag="li">
						<Col>
							<RenderTripReport tripReport={tripReport} />
						</Col>
					</Row>
				</Container>
			))}
		</>
	);
}

export default FetchTrips;
