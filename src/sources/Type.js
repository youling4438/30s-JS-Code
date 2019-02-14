export default {
    fnlist: [
        {
            fnName: 'getType',
            fnDescription: `Returns the native type of a value.
                Returns lowercased constructor name of value, "undefined" or "null" if value is undefined or null.`,
            fnCode: `const getType = v =>
                v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase();`,
            fnExampleCode: [
                'getType(new Set([1, 2, 3])); // "set"'
            ]
        },
        {
            fnName: 'is',
            fnDescription: `Checks if the provided value is of the specified type.
                Ensure the value is not undefined or null using Array.prototype.includes(), and compare the constructor property on the value with type to check if the provided value is of the specified type.`,
            fnCode: `const is = (type, val) => ![, null].includes(val) && val.constructor === type;`,
            fnExampleCode: [
                'is(Array, [1]); // true',
                'is(ArrayBuffer, new ArrayBuffer()); // true',
                'is(RegExp, /./g); // true',
                'is(Map, new Map()); // true',
                'is(Set, new Set()); // true',
                'is(WeakSet, new WeakSet()); // true',
                'is(WeakMap, new WeakMap()); // true',
                'is(String, ""); // true',
                'is(String, new String("")); // true',
                'is(Number, 1); // true',
                'is(Number, new Number(1)); // true',
                'is(Boolean, true); // true',
                'is(Boolean, new Boolean(true)); // true'
            ]
        },
        {
            fnName: 'isArrayLike',
            fnDescription: `Checks if the provided argument is array-like (i.e. is iterable).
                Check if the provided argument is not null and that its Symbol.iterator property is a function.`,
            fnCode: `const isArrayLike = obj => obj != null && typeof obj[Symbol.iterator] === 'function';`,
            fnExampleCode: [
                "isArrayLike(document.querySelectorAll('.className')); // true",
                "isArrayLike('abc'); // true",
                "isArrayLike(null); // false"
            ]
        },

    ]
}
