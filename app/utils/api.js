import axios from 'axios';

const APIKey = '919b22650ad488d7464f8588528ff38e';
const weatherURI = `http://api.openweathermap.org/data/2.5/forecast/daily?type=accurate&APPID=${APIKey}&cnt=5&q=`;

let api = {
	getForecast: (city) => {
		return axios.get(weatherURI + city)
			.then(response => response.data);
	}
}

export default api;