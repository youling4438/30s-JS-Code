import React from 'react';
import CodeCard from './CodeCard';
import ObjectData from '../sources/Object';

class ObjectComponent extends React.Component {
    render() {
        const fnlist = ObjectData.fnlist;
        const fnListDom = fnlist.map(item => <CodeCard key={item.fnName} fnData={item} />);
        return (
            <div className="container">
                <div className="category-name">Object</div>
                {fnListDom}
            </div>
        );
    }
}

ObjectComponent.defaultProps = {
};

export default ObjectComponent;
