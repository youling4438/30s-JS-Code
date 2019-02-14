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
        }
    ]
}
