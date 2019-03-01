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
                <a className="button" onClick={() => buttonClickHandle('Type')}>Type</a>
                <a className="button" onClick={() => buttonClickHandle('Object')}>Object</a>
                <a className="button" onClick={() => buttonClickHandle('Node')}>Node</a>
            </div>
        );
    }
}

ButtonGroupComponent.defaultProps = {
};

export default ButtonGroupComponent;
