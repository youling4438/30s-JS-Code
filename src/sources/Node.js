export default {
    fnlist: [
        {
            fnName: 'atob',
            fnDescription: `Decodes a string of data which has been encoded using base-64 encoding.
                Create a Buffer for the given string with base-64 encoding and use Buffer.toString('binary') to return the decoded string.`,
            fnCode: 'const atob = str => Buffer.from(str, "base64").toString("binary");',
            fnExampleCode: [
                'atob(\'Zm9vYmFy\'); // \'foobar\''
            ]
        },
        {
            fnName: 'btoa',
            fnDescription: `Creates a base-64 encoded ASCII string from a String object in which each character in the string is treated as a byte of binary data.
                Create a Buffer for the given string with binary encoding and use Buffer.toString('base64') to return the encoded string.`,
            fnCode: 'const btoa = str => Buffer.from(str, \'binary\').toString(\'base64\');',
            fnExampleCode: [
                'btoa(\'foobar\'); // \'Zm9vYmFy\''
            ]
        }
    ]
}
