require('styles/ButtonGroup.css');

import React from 'react';

class ButtonGroupComponent extends React.Component {
    render() {
        const { buttonClickHandle } = this.props;
        return (
            <div className="buttonGrounp">
                <a className="button" onClick={() => buttonClickHandle('Array')}>Array</a>
                <a className="button" onClick={() => buttonClickHandle('Date')}>Date</a>
                <a className="button" onClick={() => buttonClickHandle('Math')}>Math</a>
            </div>
        );
    }
}

ButtonGroupComponent.defaultProps = {
};

export default ButtonGroupComponent;
