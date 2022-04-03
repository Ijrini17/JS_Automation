const Calculator = require('../calculator');

const calculator = new Calculator();

describe(`Test suite for addition`, function () {

    test(`test adding with spread parameters`, async () => {
        expect(calculator.add(...[1, 3, -1])).toEqual(3);
    });

    test(`test adding with usual parameters`, async () => {
        expect(calculator.add(1, 3, -1)).toEqual(3);
    });

    test(`test adding with parameter as massive`, async () => {
        expect(calculator.add([1, 3, -1], [1, 3, -2])).toEqual(5);
    });
    //сделала такую возможность только для add

    test(`test adding with decimals`, async () => {
        expect(calculator.add([1.77, 3.132, -1.132])).toEqual(3.77);
    });

    test(`test adding with string`, async () => {
        expect(calculator.add(1, "15")).toEqual(16)
    });

    test(`test adding with many decimals`, async () => {
        expect(calculator.add(15.987978677866756565456454342432341, -0.132)).toBeLessThan(16)
    });

    test(`test adding with value in 16-system`, async () => {
        expect(calculator.add(0xF, 10)).toEqual(25)
    });

    test(`test adding with expression`, async () => {
        expect(calculator.add(15 * 3, 10)).toEqual(55)
    });
    test(`test adding with e-number`, async () => {
        expect(calculator.add(15e2, 15)).toEqual(1515)
    });

    test(`test adding with Infinity`, async () => {
        expect(() => { calculator.add(Infinity, 15) }).toThrow(Error);
    });
    test(`test adding with NaN`, async () => {
        expect(() => { calculator.add("string", 15) }).toThrow(Error);
    });

});

describe(`Test suite for multiplication`, function () {

    test(`test multiply with spread parameter`, async () => {
        expect(calculator.multiply(...[1, 3.5, -1])).toEqual(-3.5);
    });

    test(`test multiply with usual parameter`, async () => {
        expect(calculator.multiply(1, 3.55, -1)).toEqual(-3.55);
    });

    test(`test multiply with 0`, async () => {
        expect(calculator.multiply(0, 3.55, -1)).toEqual(0);
    });

    test(`test multiply with wrong argument (NaN)`, async () => {
        expect(() => { calculator.multiply("true", 6, 7.66) }).toThrow(Error);
    });
})

describe(`Test suite for substraction`, function () {

    test(`test subtraction`, async () => {
        expect(calculator.subtraction(5, 2)).toEqual(3);
    });

    test(`test subtraction with strings`, async () => {
        expect(calculator.subtraction("5", " 0 ")).toEqual(5);
    });

    test(`test subtraction with decimals`, async () => {
        expect(calculator.subtraction(50, 2, 13.7, 60000.42)).toEqual(-59966.12);
    });

    test(`test subtraction with boolean`, async () => {
        expect(calculator.subtraction(true, 2, 13, 6)).toEqual(-20);
    });
    test(`test subtraction with strings`, async () => {
        expect(() => { calculator.subtraction("string", 1) }).toThrow(Error);
    });

    test(`test subtraction with Infinity`, async () => {
        expect(() => { calculator.subtraction(Infinity, Infinity) }).toThrow(Error);
    });

})

describe(`Test suite for division`, function () {

    test(`test division`, async () => {
        expect(calculator.divide(5, 2)).toEqual(2.5);
    });

    test(`test division with strings`, async () => {
        expect(calculator.divide("5", " 1 ")).toEqual(5);
    });

    test(`test division with decimals`, async () => {
        expect(calculator.divide(13.2, 1.2)).toEqual(11);
    });

    test(`test subtraction with boolean`, async () => {
        expect(calculator.divide(true, 2)).toEqual(0.5);
    });

    test(`test division by zero`, async () => {
        expect(() => { calculator.divide(7, 0) }).toThrow(Error);
    });

    test(`test division with strings`, async () => {
        expect(() => { calculator.divide("string", 1) }).toThrow(Error);
    });

    test(`test division with Infinity`, async () => {
        expect(() => { calculator.divide(Infinity, Infinity) }).toThrow(Error);
    });

})
 
describe(`Test suite for exponentiation`, function () {

    test(`test  exponentiation with zero exponenta`, async () => {
        expect(calculator.exponentiation(5, 0)).toEqual(1);
    });
 
    test(`test exponentiation`, async () => {
        expect(calculator.exponentiation(5, 3)).toEqual(125);
    });
 
    test(`test exponentiation with decimal exponenta`, async () => {
        expect(calculator.exponentiation(25, 0.5)).toEqual(5);
    });
 
    test(`test exponentiation`, async () => {
        expect(calculator.exponentiation(25, 0.2)).toBeLessThan(15);
    });
 
    test(`test exponentiation with negative exponenta`, async () => {
        expect(calculator.exponentiation(25, -0.5)).toEqual(0.2);
    });
    test(`test exponentiation with wrong argument`, async () => {
        expect(() => { calculator.exponentiation("string", 6) }).toThrow(Error);
    });
    test(`test exponentiation with wrong argument`, async () => {
        expect(() => { calculator.exponentiation(Infinity, Infinity) }).toThrow(Error);
    });
 
})