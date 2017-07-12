import React, { Component } from 'react';
import Search from './Search';
import { Link } from 'react-router-dom';

class Header extends Component {
	render() {
		return (
			<div className='header'>
				<h1><Link to='/'>Clever Title</Link></h1>
				{this.props.showSearch && <Search />}
			</div>
		);
	}
}

Header.defaultProps = {
	showSearch: true
}

export default Header;