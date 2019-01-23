require('styles/CodeCard.css');

import React from 'react';

class CodeCardComponent extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        const { fnData } = this.props;
        const { fnName, fnDescription, fnCode, fnExampleCode } = fnData;
        const fnExampleCodeList = fnExampleCode.map((item, index) => <p key={index}>{item}</p>);
        return (
            <div className="codeCard">
                <div className="fnName">{fnName}</div>
                <div className="fnDescription">{fnDescription}</div>
                <div className="fnCode">{fnCode}</div>
                <div className="fnCode">{fnExampleCodeList}</div>
            </div>
        );
    }
}

CodeCardComponent.defaultProps = {
};

export default CodeCardComponent;
