import { baseUrl } from 'config';

export const postTripReport = (userName, location, visitType, visitDate, recommend, tripText) => {
	const newTripReport = {
		userName: userName,
		location: location,
		visitType: visitType,
		visitDate: visitDate,
		recommend: recommend,
		tripText: tripText,
	};
	console.log('Trip Report: ', newTripReport);
	return fetch(baseUrl + 'tripreports', {
		method: 'POST',
		body: JSON.stringify(newTripReport),
		headers: {
			'Content-Type': 'application/json',
		},
	})
		.then(
			(response) => {
				if (response.ok) {
					return response;
				} else {
					const error = new Error(`Error ${response.status}: ${response.statusText}`);
					error.response = response;
					throw error;
				}
			},
			(error) => {
				throw error;
			}
		)
		.then((response) => response.json())
		.catch((error) => {
			console.log('post trip report', error.message);
			alert('Your trip report could not be posted\nError: ' + error.message);
		});
};

export const postUserRoute = (userName, email, startLoc, endLoc, rapidClass, text) => {
	const newUserRoute = {
		userName: userName,
		email: email,
		startLoc: startLoc,
		endLoc: endLoc,
		rapidClass: rapidClass,
		text: text
	};
	console.log('User Route: ', newUserRoute);
	return fetch(baseUrl + 'userroutes', {
		method: 'POST',
		body: JSON.stringify(newUserRoute),
		headers: {
			'Content-Type': 'application/json',
		},
	})
		.then(
			(response) => {
				if (response.ok) {
					return response;
				} else {
					const error = new Error(`Error ${response.status}: ${response.statusText}`);
					error.response = response;
					throw error;
				}
			},
			(error) => {
				throw error;
			}
		)
		.then((response) => response.json())
		.catch((error) => {
			console.log('post route', error.message);
			alert('Your route could not be posted\nError: ' + error.message);
		});
};


export const postUserRecSite = (userName, email, location, text) => {
	const newRecSite = {
		userName: userName,
        email: email,
		location: location,
		text: text
	};
	console.log('Rec Site: ', newRecSite);
	return fetch(baseUrl + 'recsites', {
		method: 'POST',
		body: JSON.stringify(newRecSite),
		headers: {
			'Content-Type': 'application/json',
		},
	})
		.then(
			(response) => {
				if (response.ok) {
					return response;
				} else {
					const error = new Error(`Error ${response.status}: ${response.statusText}`);
					error.response = response;
					throw error;
				}
			},
			(error) => {
				throw error;
			}
		)
		.then((response) => response.json())
		.catch((error) => {
			console.log('post rec site', error.message);
			alert('Your rec site could not be posted\nError: ' + error.message);
		});
};

