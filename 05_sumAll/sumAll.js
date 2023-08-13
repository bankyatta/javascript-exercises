const sumAll = function(num1, num2) {
    //check if arguments are number and greater than 0
    if (typeof num1 !== 'number' || 
        typeof num2 !== 'number') {
            return 'ERROR';
    }

    if (num1 < 0 || num2 < 0) {
        return 'ERROR';
    }
    
    //check which one of arguments are greather than another
    let start = num1;
    let end = num2;

    if (num1 > num2) {
        start = num2;
        end = num1;
    }

    //sum by loop
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }

    //return sum
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
