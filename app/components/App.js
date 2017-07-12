import React, { Component } from 'react';
import Details from './Details';
import Landing from './Landing';
import NotFound from './NotFound';
import Forecast from './Forecast';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={Landing} />
					<Route path='/forecast' component={Forecast} />
					<Route path='/details/:city' component={Details} />
					<Route component={NotFound} />
				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;