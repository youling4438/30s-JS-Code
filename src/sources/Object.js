export default {
    fnlist: [
        {
            fnName: 'shallowClone',
            fnDescription: `Creates a shallow clone of an object.
                Use Object.assign() and an empty object ({}) to create a shallow clone of the original.`,
            fnCode: 'const shallowClone = obj => Object.assign({}, obj);',
            fnExampleCode: [
                'const a = { x: true, y: 1 };',
                'const b = shallowClone(a); // a !== b;'
            ]
        },
        {
            fnName: 'pick',
            fnDescription: `Picks the key-value pairs corresponding to the given keys from an object.
                Use Array.prototype.reduce() to convert the filtered/picked keys back to an object with the corresponding key-value pairs if the key exists in the object.`,
            fnCode: 'const pick = (obj, arr) => arr.reduce((acc, curr) => (curr in obj && (acc[curr] = obj[curr]), acc), {});',
            fnExampleCode: [
                'pick({ a: 1, b: \'2\', c: 3 }, [\'a\', \'c\']); // { \'a\': 1, \'c\': 3 }'
            ]
        }
    ]
}
