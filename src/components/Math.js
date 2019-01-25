import React from 'react';
import CodeCard from './CodeCard';
import MathData from '../sources/Math'

class MathComponent extends React.Component {
    render() {
        const fnlist = MathData.fnlist;
        const fnListDom = fnlist.map(item => <CodeCard key={item.fnName} fnData={item} />);
        return (
            <div className="container">
                <div className="category-name">Math</div>
                {fnListDom}
            </div>
        );
    }
}

MathComponent.defaultProps = {
};

export default MathComponent;
