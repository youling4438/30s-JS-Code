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
        {
            fnName: 'isPlainObject',
            fnDescription: `Checks if the provided value is an object created by the Object constructor.
                Check if the provided value is truthy, use typeof to check if it is an object and Object.constructor to make sure the constructor is equal to Object.`,
            fnCode: `const isPlainObject = val => !!val && typeof val === 'object' && val.constructor === Object;`,
            fnExampleCode: [
                'isPlainObject({ a: 1 }); // true',
                'isPlainObject(new Map()); // false'
            ]
        },
        {
            fnName: 'isBoolean',
            fnDescription: `Checks if the given argument is a native boolean element.
                Use typeof to check if a value is classified as a boolean primitive.`,
            fnCode: `const isBoolean = val => typeof val === 'boolean';`,
            fnExampleCode: [
                'isBoolean(null); // false',
                'isBoolean(false); // true'
            ]
        },
        {
            fnName: 'isFunction',
            fnDescription: `Checks if the given argument is a function.
                Use typeof to check if a value is classified as a function primitive.`,
            fnCode: `const isFunction = val => typeof val === 'function';`,
            fnExampleCode: [
                'isFunction("x"); // false',
                'isFunction(x => x); // true'
            ]
        },
        {
            fnName: 'isEmpty',
            fnDescription: `Returns true if the a value is an empty object, collection, map or set, has no enumerable properties or is any type that is not considered a collection.
                Check if the provided value is null or if its length is equal to 0.`,
            fnCode: `const isEmpty = val => val == null || !(Object.keys(val) || val).length;`,
            fnExampleCode: [
                'isEmpty(new Map()); // true',
                'isEmpty(new Set()); // true',
                'isEmpty([]); // true',
                'isEmpty({}); // true',
                'isEmpty(""); // true',
                'isEmpty([1, 2]); // false',
                'isEmpty({ a: 1, b: 2 }); // false',
                'isEmpty("text"); // false',
                'isEmpty(123); // true - type is not considered a collection',
                'isEmpty(true); // true - type is not considered a collection'
            ]
        },
        {
            fnName: 'isNumber',
            fnDescription: `RChecks if the given argument is a number.
                Use typeof to check if a value is classified as a number primitive.`,
            fnCode: `const isNumber = val => typeof val === 'number';`,
            fnExampleCode: [
                'isNumber("1"); // false',
                'isNumber(1); // true'
            ]
        },
        {
            fnName: 'isObject',
            fnDescription: `eturns a boolean determining if the passed value is an object or not.
                Uses the Object constructor to create an object wrapper for the given value. If the value is null or undefined, create and return an empty object. Οtherwise, return an object of a type that corresponds to the given value.`,
            fnCode: `const isObject = obj => obj === Object(obj);`,
            fnExampleCode: [
                'isObject([1, 2, 3, 4]); // true',
                'isObject([]); // true',
                'isObject(["Hello!"]); // true',
                'isObject({ a: 1 }); // true',
                'isObject({}); // true',
                'isObject(true); // false'
            ]
        },
        {
            fnName: 'isObjectLike',
            fnDescription: `Checks if a value is object-like.
                Check if the provided value is not null and its typeof is equal to 'object'.`,
            fnCode: `const isObjectLike = val => val !== null && typeof val === 'object';`,
            fnExampleCode: [
                'isObjectLike({}); // true',
                'isObjectLike([1, 2, 3]); // true',
                'isObjectLike(x => x); // false',
                'isObjectLike(null); // false'
            ]
        }

    ]
}
