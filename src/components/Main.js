require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Header from './Header';
import Array from './Array';
import Date from './Date';
import Math from './Math';
import Type from './Type';
import Node from './Node';
import ObjectComponent from './Object';
import ButtonGroup from './ButtonGroup';

class AppComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showComponentName: 'Array'
		}
		this.buttonClickHandle = this.buttonClickHandle.bind(this);
	}

	buttonClickHandle(showComponentName) {
		this.setState({
			showComponentName
		});
	}

	render() {
		const { showComponentName } = this.state;
		const allComponents = {
			'Array': <Array />,
			'Date': <Date />,
            'Math': <Math />,
            'Type': <Type />,
            'Object': <ObjectComponent />,
            'Node': <Node />
		};
        const showComponent = allComponents[showComponentName];
		return (
			<div className="index">
				<Header />
				{showComponent}
				<ButtonGroup
					buttonClickHandle={this.buttonClickHandle}
				/>
				<div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
			</div>
		);
	}
}

AppComponent.defaultProps = {
};

export default AppComponent;
