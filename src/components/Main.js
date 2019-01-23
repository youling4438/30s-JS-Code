require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Header from './Header';
import Array from './Array';
import Date from './Date';

class AppComponent extends React.Component {
	render() {
		return (
			<div className="index">
				<Header />
				<Array />
				<Date />
				<div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
			</div>
		);
	}
}

AppComponent.defaultProps = {
};

export default AppComponent;
