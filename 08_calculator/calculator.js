const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	return array.reduce(
    (sum, current) => sum + current
  , 0)
};

const multiply = function(array) {
  return array.reduce(
    (sum, current) => sum * current
  )
};

const power = function(num1, num2) {
	return Math.pow(num1, num2);
};

const factorial = function(number) {
  if (number === 0) {
    return 1;
  }

  let sum = 1;
  for (let i = 1; i <= number; i++) {
    sum *= i;
  }

  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
