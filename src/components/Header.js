require('styles/Header.css');

import React from 'react';

class HeaderComponent extends React.Component {
    render() {
        return (
            <div className="title">
                <div className="left">...</div>
                <div className="center">30 seconds of code</div>
                <div className="right">
                    <a>
                        IMG
                    </a>
                </div>
            </div>
        );
    }
}

HeaderComponent.defaultProps = {
};

export default HeaderComponent;
