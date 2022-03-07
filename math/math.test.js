const { 
    add, subtract, divide, multiply, squareRoot, max
} = require("./math")

describe("Testing the math module", () => {

    test('Add two numbers together', () => {
        expect(add(1, 1)).toBe(2);
    });

    test('Subtract two numbers together', () => {
        expect(subtract(4, 2)).toBe(2);
    });

    test('Divide two numbers', () => {
        expect(divide(6, 3)).toBe(2);
    });

    test('Multiply two numbers together', () => {
        expect(multiply(2, 2)).toBe(4);
    });

    test('Square root', () => {
        expect(squareRoot(4)).toBe(2);

    })

    test('max', () => {
        expect(max(1)).toBe(1);
    })

});
