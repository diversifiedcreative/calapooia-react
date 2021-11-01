import { baseUrl } from '../config';

export const getTripReports = () => {
    return fetch(baseUrl + 'tripReports')
    .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
        error => {
            const errMess = new Error(error.message);
            throw errMess;
        }
    )
    .then(response => response.json())
    .catch((error) => {
        console.log('getTripReports', error.message);
        alert('Could not get Trip Reports from server. \nError: ' + error.message);
    });
};
