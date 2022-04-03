
/**
 *
 *A class containing method for summing and multiplying parameters.
 * @class Calculator
 */
class Calculator {
  constructor() {
  };
  /**
   *
   *
   * @param {Array<Number>} theArgs array of numbers for summing
   * @return {Number} sum of numbers
   * @memberof Calculator
   */
  add(...theArgs) {
    for (let i = 0; i < theArgs.length; i++) {
      if (typeof theArgs[i] === 'string') { theArgs[i] = Number(theArgs[i]) }
      if (theArgs[i] === Infinity) { throw new Error("Argument is Infinity"); }
      if (Number.isNaN(theArgs[i])) {
        throw new Error("Argument is NaN");
      }
    }
    let result = 0;
    let res = 0
    for (let i = 0; i < theArgs.length; i++) {
      if (typeof theArgs[i] === "object") {
        {
          for (let c = 0; c < theArgs[i].length; c++)
            res += theArgs[i][c]

        }
        theArgs[i] = res;
        res = 0;
      }
      result += theArgs[i];
    }

    return result;
  };
  /**
   *
   *
   * @param {Array<Number>} theArgs array of numbers for multiplication
   * @return {Number}
   * @memberof Calculator
   */
  multiply(...theArgs) {
    let result = 1;

    for (let i = 0; i < theArgs.length; i++) {
      if (isNaN(theArgs[i])) {
        throw new Error("Argument is NaN");
      }
      if (theArgs[i] === Infinity) {
        throw new Error("Argument cannot be Infinity");
      }

      result = result * theArgs[i];
    }
    if (result === -0) {
      return 0
    }
    return result;

  };

  subtraction(...theArgs) {
    let args = Object.values(arguments);
    args.forEach((element) => {
      if (isNaN(element)) {
        throw new Error("Argument is NaN");
      }
      if (element === Infinity) {
        throw new Error("Argument cannot be Infinity");
      }
    });
    let result = 0
    result = theArgs[0] - theArgs[1];
    for (let i = 2; i < theArgs.length; i++) { result -= theArgs[i] }
    return result;
  }

  divide(dividend, divider) {
    if (divider === 0) { throw new Error("Divider can't be zero"); }
    let args = Object.values(arguments);
    args.forEach(element => {
      if (isNaN(element)) {
        throw new Error("Argument is NaN");
      }
      if (element === Infinity) {
        throw new Error("Argument cannot be Infinity");
      }
    });

    return dividend / divider;
  }

  exponentiation(number, exp) {
    let args = Object.values(arguments);
    args.forEach((element) => {
      if (isNaN(element)) {
        throw new Error("Argument is NaN");
      }
      if (element === Infinity) {
        throw new Error("Argument cannot be Infinity");
      }
    });
    return number ** exp;
  }
};

module.exports = Calculator;