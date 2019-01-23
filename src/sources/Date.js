export default {
    fnlist: [
        {
            fnName: 'dayOfYear',
            fnDescription: `Gets the day of the year from a Date object.
                Use new Date() and Date.prototype.getFullYear() to get the first day of the year as a Date object,
                subtract it from the provided date and divide with the milliseconds in each day to get the result.
                Use Math.floor() to appropriately round the resulting day count to an integer.`,
            fnCode: `const dayOfYear = date =>
                Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);`,
            fnExampleCode: [
                'dayOfYear(new Date()); // 272'
            ]
        },
        {
            fnName: 'isAfterDate',
            fnDescription: `Check if a date is after another date.
                Use the greater than operator (>) to check if the first date comes after the second one.`,
            fnCode: 'const isAfterDate = (dateA, dateB) => dateA > dateB;',
            fnExampleCode: [
                'isAfterDate(new Date(2019, 01, 23), new Date(2018, 10, 20)); // true'
            ]
        },
        {
            fnName: 'isBeforeDate',
            fnDescription: `Check if a date is before another date.
                Use the less than operator (<) to check if the first date comes before the second one.`,
            fnCode: 'const isBeforeDate = (dateA, dateB) => dateA < dateB;',
            fnExampleCode: [
                'isBeforeDate(new Date(2019, 01, 23), new Date(2018, 10, 20)); // false'
            ]
        },
        {
            fnName: 'isSameDate',
            fnDescription: `Check if a date is the same as another date.
                Use Date.prototype.toISOString() and strict equality checking (===) to check if the first date is the same as the second one.`,
            fnCode: 'const isSameDate = (dateA, dateB) => dateA.toISOString() === dateB.toISOString();',
            fnExampleCode: [
                'isSameDate(new Date(2019, 01, 23), new Date(2019, 01, 23)); // true'
            ]
        },
        {
            fnName: 'tomorrow',
            fnDescription: `Results in a string representation of tomorrow's date.
                Use new Date() to get the current date, increment by one using Date.getDate() and set the value to the result using Date.setDate(). Use Date.prototype.toISOString() to return a string in yyyy-mm-dd format.`,
            fnCode: `const tomorrow = () => {
                    let t = new Date();
                    t.setDate(t.getDate() + 1);
                    return t.toISOString().split('T')[0];
                };`,
            fnExampleCode: [
                'tomorrow(); // 2019-01-24 (if current date is 2019-01-24)'
            ]
        }
    ]
}