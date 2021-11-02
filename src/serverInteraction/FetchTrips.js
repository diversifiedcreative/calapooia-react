import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { baseUrl } from '../config';

function RenderTripReport({ tripReport }) {
	if (tripReport) {
		return (
			<div className="render-cont container">
				<div className="render-row row">
					<div className="render-left col-sm-8">
						<div className="render-head">{tripReport.name}</div>
						<div className="render-sub">
							<strong>User: </strong>
							{tripReport.userName} | <strong>Recommendation: </strong>
							{tripReport.recommend} ({tripReport.visitDate})
						</div>
					</div>
					<div className="render-right col-sm-4">
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
	});

	return (
		<div>
			<ul>
				{tripReports.map((tripReport) => (
					<li key={tripReport.id}>
                        <RenderTripReport tripReport={tripReport} />
                    </li>
				))}
			</ul>
		</div>
	);
}

export default FetchTrips;
