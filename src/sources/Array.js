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
        },
        {
            fnName: 'chunk',
            fnDescription: `Chunks an array into smaller arrays of a specified size.
                Use Array.from() to create a new array, that fits the number of chunks that will be produced.
                Use Array.prototype.slice() to map each element of the new array to a chunk the length of size.
                If the original array can't be split evenly, the final chunk will contain the remaining elements.`,
            fnCode: `const chunk = (arr, size) =>
                        Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
                        arr.slice(i * size, i * size + size)
                    );`,
            fnExampleCode: [
                'chunk([1, 2, 3, 4, 5], 2); // [[1,2],[3,4],[5]]'
            ]
        },
        {
            fnName: 'compact',
            fnDescription: `Removes falsey values from an array.
                Use Array.prototype.filter() to filter out falsey values (false, null, 0, "", undefined, and NaN).`,
            fnCode: 'const compact = arr => arr.filter(Boolean);',
            fnExampleCode: [
                'compact([0, 1, false, 2, "", 3, "a", "e" * 23, NaN, "s", 34]); // [ 1, 2, 3, "a", "s", 34 ]'
            ]
        },
        {
            fnName: 'deepFlatten',
            fnDescription: `Deep flattens an array.
                Use recursion. Use Array.prototype.concat() with an empty array ([]) and the spread operator (...) to flatten an array.
                Recursively flatten each element that is an array.`,
            fnCode: 'const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));',
            fnExampleCode: [
                'deepFlatten([1, [2], [[3], 4], 5]); // [1,2,3,4,5]'
            ]
        },
        {
            fnName: 'difference',
            fnDescription: `Returns the difference between two arrays.
                Create a Set from b, then use Array.prototype.filter() on a to only keep values not contained in b.`,
            fnCode: `const difference = (a, b) => {
                const s = new Set(b);
                return a.filter(x => !s.has(x));
              };`,
            fnExampleCode: [
                'difference([1, 2, 3], [1, 2, 4]); // [3]'
            ]
        },
        {
            fnName: 'indexOfAll',
            fnDescription: `Returns all indices of val in an array. If val never occurs, returns [].
                Use Array.prototype.reduce() to loop over elements and store indices for matching elements. Return the array of indices.`,
            fnCode: 'const indexOfAll = (arr, val) => arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);',
            fnExampleCode: [
                'indexOfAll([1, 2, 3, 1, 2, 3], 1); // [0,3]',
                'indexOfAll([1, 2, 3], 4); // []'
            ]
        }
    ]
}
