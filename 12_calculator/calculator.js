const add = function(num1, num2) {
	return num1 + num2;
};


const subtract = function(num1, num2) {
  if (num1 < 0 && num2 < 0) {
    return Math.abs(num2) - Math.abs(num1);
  } else if (num1 < 0) {
    return num2 + Math.abs(num1);
  } else if (num2 < 0) {
    return num1 + Math.abs(num2);
  } else {
    return num1 - num2;
  }
};

const sum = function(arr) {
  let sum = 0;
  arr.forEach(num => {
    sum += num;
  });
  return sum;
};

const multiply = function(arr) {
  let product = 1;
  arr.forEach(num => {
    product *= num;
  });
  return product;  
};

const power = function(num1, num2) {
  return num1 ** num2;
};

const factorial = function(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  let product = 1;
  for (let i = num; i > 1; i--) {
    product *= i;
  }
  return product;xw
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
