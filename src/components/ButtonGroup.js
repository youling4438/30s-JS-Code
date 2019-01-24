require('styles/ButtonGroup.css');

import React from 'react';

class ButtonGroupComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { buttonClickHandle } = this.props;
        return (
            <div className="buttonGrounp">
                <a className="button" onClick={() => buttonClickHandle('Array')}>Array</a>
                <a className="button" onClick={() => buttonClickHandle('Array')}>Date</a>
            </div>
        );
    }
}

ButtonGroupComponent.defaultProps = {
};

export default ButtonGroupComponent;
