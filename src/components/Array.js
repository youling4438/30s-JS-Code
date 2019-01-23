import React from 'react';
import CodeCard from './CodeCard';
import ArrayData from '../sources/Array'

class ArrayComponent extends React.Component {
    render() {
        const fnlist = ArrayData.fnlist;
        const fnListDom = fnlist.map(item => <CodeCard key={item.fnName} fnData={item} />);
        return (
            <div className="container">
                <div className="category-name">Array</div>
                {fnListDom}
            </div>
        );
    }
}

ArrayComponent.defaultProps = {
};

export default ArrayComponent;
