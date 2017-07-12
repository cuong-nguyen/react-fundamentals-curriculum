import React, { Component } from 'react';
import Header from './Header';

class Details extends Component {
	render() {
		const { state } = this.props.location;
		const { city } = this.props.match.params;
		let weather = state.weather[0];
		let temp = state.temp;

		return (
			<div>
				<Header />
				<div className='details'>
					<img
						src={`/images/weather-icons/${weather.icon}.svg`}
						alt={weather.description} />
					<h3>{new Date(state.dt * 1000).toDateString()}</h3>
					<h3>{city}</h3>
					<h3>{weather.description}</h3>
					<h3>Min temp: {temp.min}</h3>
					<h3>Max temp: {temp.max}</h3>
					<h3>Humidity: {state.humidity}</h3>
				</div>
			</div>
		);
	}
}

export default Details;