require('styles/Header.css');

import React from 'react';
import codeImage from '../images/logo_256.png'
import githubImage from '../images/github.png'

class HeaderComponent extends React.Component {
    render() {
        return (
            <div className="title">
                <div className="left">...</div>
                <div className="center">
                    <img src={codeImage} alt="logo-image" />
                    <span>30 seconds of code</span>
                </div>
                <div className="right">
                    <a>
                        <img src={githubImage} alt="github-image" />
                    </a>
                </div>
            </div>
        );
    }
}

HeaderComponent.defaultProps = {
};

export default HeaderComponent;
