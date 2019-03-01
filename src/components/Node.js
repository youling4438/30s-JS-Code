import React from 'react';
import CodeCard from './CodeCard';
import NodeData from '../sources/Node'

class NodeComponent extends React.Component {
    render() {
        const fnlist = NodeData.fnlist;
        const fnListDom = fnlist.map(item => <CodeCard key={item.fnName} fnData={item} />);
        return (
            <div className="container">
                <div className="category-name">Node</div>
                {fnListDom}
            </div>
        );
    }
}

NodeComponent.defaultProps = {
};

export default NodeComponent;
