import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const NotFound = (props) => {
	return (
		<div className="notfound">
			<p>Looks like you've followed a broken link or entered a URL that doesn't exist on this site.</p>
			<p>
				<Link to='/'>Back to our site</Link>
			</p>
		</div>
	)
}

export default NotFound;