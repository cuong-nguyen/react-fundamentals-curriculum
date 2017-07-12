import React, { Component } from 'react';
import Header from './Header';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import api from '../utils/api';

class Weather extends Component {
	viewDetails = () => {
		this.props.history.push({
			pathname: '/details/' + this.props.city,
			state: this.props.day,
		})
	}

	render() {
		const { day } = this.props;
		return (
			<div className='weather' onClick={this.viewDetails}>
				<img src={`/images/weather-icons/${day.weather[0].icon}.svg`} alt={day.weather[0].description} />
				<h3>{new Date(day.dt * 1000).toDateString()}</h3>
			</div>
		)
	}
}

const Result = (props) => {
	const { city, list } = props.forecast;

	return (
		<div className='result'>
			<h1>{city.name}</h1>
			<div className='day-forecast'>
				{list.map((day, idx) => <Weather key={idx} day={day} {...props} />)}
			</div>
		</div>
	)
}

class Forecast extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			forecast: null,
			city: ''
		}
	}

	componentWillReceiveProps(nextProps) {
		let query = queryString.parse(nextProps.location.search);
		if (this.state.city !== query.city) {
			this.onSearch(query.city);
		}
	}

	componentDidMount() {
		let query = queryString.parse(this.props.location.search);
		if (query.city) {
			this.onSearch(query.city);
		}
	}

	onSearch = (city) => {
		api.getForecast(city)
			.then(data => {
				this.setState({ forecast: data, city: city });
			});
	}

	render() {
		const { forecast } = this.state;

		return (
			<div>
				<Header onSearch={this.onSearch} />
				{forecast && <Result forecast={forecast} city={this.state.city} {...this.props} />}
			</div>
		);
	}
}

export default Forecast;