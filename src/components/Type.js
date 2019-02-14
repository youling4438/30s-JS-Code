import React from 'react';
import CodeCard from './CodeCard';
import TypeData from '../sources/Type'

class TypeComponent extends React.Component {
    render() {
        const fnlist = TypeData.fnlist;
        const fnListDom = fnlist.map(item => <CodeCard key={item.fnName} fnData={item} />);
        return (
            <div className="container">
                <div className="category-name">Type</div>
                {fnListDom}
            </div>
        );
    }
}

TypeComponent.defaultProps = {
};

export default TypeComponent;
