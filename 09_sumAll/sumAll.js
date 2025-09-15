const sumAll = function(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2)) {
        return 'ERROR';
    }
    let sum = 0;
    let max = num1 > num2 ? num1 : num2;
    let min = num1 > num2 ? num2 : num1;

    for(let i = min; i <= max; i++){
        sum += i;
    }

    return sum
};

// Do not edit below this line
module.exports = sumAll;
