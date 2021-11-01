import { baseUrl } from '../config';

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
			console.log('post comment', error.message);
			alert('Your comment could not be posted\nError: ' + error.message);
		});
};
