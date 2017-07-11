import React, { Component } from 'react';
import Search from './Search';

class Header extends Component {
	render() {
		return (
			<div className='header'>
				<h1>Clever Title</h1>
				{this.props.showSearch && <Search />}
			</div>
		);
	}
}

Header.defaultProps = {
	showSearch: true
}

export default Header;