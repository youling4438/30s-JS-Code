export default {
    fnlist: [
        {
            fnName: 'average',
            fnDescription: `Returns the average of two or more numbers.
                Use Array.prototype.reduce() to add each value to an accumulator, initialized with a value of 0,
                divide by the length of the array.`,
            fnCode: 'const average = (...nums) => nums.reduce((acc, val) => acc + val, 0) / nums.length;',
            fnExampleCode: [
                'average(...[1, 2, 3]); // 2',
                'average(1, 2, 3); // 2'
            ]
        },
        {
            fnName: 'isDivisible',
            fnDescription: `Checks if the first numeric argument is divisible by the second one.
                Use the modulo operator (%) to check if the remainder is equal to 0.`,
            fnCode: 'const isDivisible = (dividend, divisor) => dividend % divisor === 0;',
            fnExampleCode: [
                'isDivisible(6, 3); // true',
                'isDivisible(5, 3); // false'
            ]
        },
        {
            fnName: 'isEven',
            fnDescription: `Returns true if the given number is even, false otherwise.
                Checks whether a number is odd or even using the modulo (%) operator. Returns true if the number is even,
                false if the number is odd.`,
            fnCode: 'const isEven = num => num % 2 === 0;',
            fnExampleCode: [
                'isEven(3); // false',
                'isEven(4); // true'
            ]
        },
        {
            fnName: 'sum',
            fnDescription: `Returns the sum of two or more numbers/arrays.
                Use Array.prototype.reduce() to add each value to an accumulator, initialized with a value of 0.`,
            fnCode: 'const sum = (...arr) => [...arr].reduce((acc, val) => acc + val, 0);',
            fnExampleCode: [
                'sum(1, 2, 3, 4); // 10',
                'sum(...[1, 2, 3, 4]); // 10'
            ]
        }
    ]
}
