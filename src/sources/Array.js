export default {
    fnlist: [
        {
            fnName: 'all',
            fnDescription: `Returns true if the provided predicate function returns true for all elements in a collection, false otherwise.
                Use Array.prototype.every() to test if all elements in the collection return true based on fn.Omit the second argument, fn,
                to use Boolean as a default.`,
            fnCode: 'const all = (arr, fn = Boolean) => arr.every(fn);',
            fnExampleCode: [
                'all([4, 2, 3], x => x > 1); // true',
                'all([1, 2, 3]); // true'
            ]
        },
        {
            fnName: 'allEqual',
            fnDescription: `Check if all elements in an array are equal.
                Use Array.prototype.every() to check if all the elements of the array are the same as the first one.`,
            fnCode: 'const allEqual = arr => arr.every(val => val === arr[0]);',
            fnExampleCode: [
                'allEqual([1, 2, 3, 4, 5, 6]); // false',
                'allEqual([1, 1, 1, 1]); // true'
            ]
        },
        {
            fnName: 'any',
            fnDescription: `Returns true if the provided predicate function returns true for at least one element in a collection, false otherwise.
                Use Array.prototype.some() to test if any elements in the collection return true based on fn.
                Omit the second argument, fn, to use Boolean as a default.`,
            fnCode: 'const any = (arr, fn = Boolean) => arr.some(fn);',
            fnExampleCode: [
                'any([0, 1, 2, 0], x => x >= 2); // true',
                'any([0, 0, 1, 0]); // true'
            ]
        }
    ]
}