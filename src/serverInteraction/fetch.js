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
		<div className="fetch-cont">
			{recSites.map((recSite) => (
				<div className="render-cont" key={recSite._id}>
					<RenderRecSite recSite={recSite} />
				</div>
			))}
		</div>
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
		<div className="fetch-cont">
			{routes.map((route) => (
				<div className="render-cont" key={route._id}>
					<RenderRoute route={route} />
				</div>
			))}
		</div>
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
		<div className="fetch-cont">
			{tripReports.map((tripReport) => (
				<div className="render-cont" key={tripReport._id}>
					<RenderTripReport tripReport={tripReport} />
				</div>
			))}
		</div>
	);
}
