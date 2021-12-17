import React, { useState, useEffect } from 'react';
import { RenderRecSite, RenderRoute, RenderTripReport } from 'components/toolComponents/DisplayModules';
import axios from 'axios';
import { baseUrl } from 'config';

export function FetchRecSites() {
	const [recSites, setRecSites] = useState([]);

	useEffect(() => {
		axios
			.get(`${baseUrl}recsites`)
			.then((res) => {
				console.log(res);
				setRecSites(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<>
			{recSites.map((recSite) => (
				<div className="fetch-cont" key={recSite._id}>
					<div className="fetch-row" tag="li">
						<div className="fetch-col">
							<RenderRecSite recSite={recSite} />
						</div>
					</div>
				</div>
			))}
		</>
	);
}

export function FetchRoutes() {
	const [routes, setRoutes] = useState([]);

	useEffect(() => {
		axios
			.get(`${baseUrl}routes`)
			.then((res) => {
				console.log(res);
				setRoutes(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<>
			{routes.map((route) => (
				<div className="fetch-cont" key={route._id}>
					<div className="fetch-row" tag="li">
						<div className="fetch-col">
							<RenderRoute route={route} />
						</div>
					</div>
				</div>
			))}
		</>
	);
}

export function FetchTrips() {
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
				<div className="fetch-cont" key={tripReport._id}>
					<div className="fetch-row" tag="li">
						<div className="fetch-col">
							<RenderTripReport tripReport={tripReport} />
						</div>
					</div>
				</div>
			))}
		</>
	);
}
