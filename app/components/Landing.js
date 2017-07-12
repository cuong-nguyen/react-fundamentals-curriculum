import React, { Component } from 'react';
import Search from './Search';
import Header from './Header';

class Landing extends Component {
	constructor(props, context) {
		super(props, context);

	}

	render() {
		return (
			<div className='container'>
				<Header showSearch={false} />
				<div className='landing'>
					<h1>Enter a City and State</h1>
					<Search />
				</div>
			</div>
		);
	}
}

export default Landing;