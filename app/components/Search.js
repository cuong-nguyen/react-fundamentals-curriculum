import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

class Search extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			searchText: ''
		}
	}

	onChange = (event) => {
		this.setState({ searchText: event.target.value });
	}

	onClick = () => {
		const { history } = this.props;
		let query = queryString.parse(history.location.search);
		if (query.city !== this.state.searchText) {
			history.push(`/forecast?city=${this.state.searchText}`);
		}
		this.setState({ searchText: '' });
	}

	render() {
		const { searchText } = this.state;
		const { placeholder, onSearch } = this.props;

		return (
			<div className='search'>
				<input
					type='text'
					value={searchText}
					placeholder={placeholder}
					onChange={this.onChange}
					className='form-control'
				/>
				<button
					className='btn-success form-control'
					disabled={!searchText}
					onClick={this.onClick}>
					Get Weather
				</button>
			</div>
		);
	}
}

Search.defaultProps = {
	placeholder: 'St. George, Utah'
}

export default withRouter(Search);