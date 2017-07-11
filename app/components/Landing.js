import React, { Component } from 'react';
import Search from './Search';
import Header from './Header';

class Landing extends Component {
	render() {
		return (
			<div>
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