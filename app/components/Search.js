import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

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
		history.push(`/forecast?city=${this.state.searchText}`);
	}

	render() {
		const { searchText } = this.state;
		const { placeholder } = this.props;

		return (
			<div className='search'>
				<input
					type='text'
					value={searchText}
					placeholder={placeholder}
					onChange={this.onChange}
				/>
				<button
					className='btn-success'
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