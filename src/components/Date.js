import React from 'react';
import CodeCard from './CodeCard';
import DateData from '../sources/Date'

class DateComponent extends React.Component {
    render() {
        const fnlist = DateData.fnlist;
        const fnListDom = fnlist.map(item => <CodeCard fnData={item} />);
        return (
            <div className="container">
                <div className="category-name">Date</div>
                {fnListDom}
            </div>
        );
    }
}

DateComponent.defaultProps = {
};

export default DateComponent;
