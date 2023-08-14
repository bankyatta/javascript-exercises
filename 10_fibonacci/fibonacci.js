const fibonacci = function(index) {
    //program will return the value of fibonacci index
    //example: ((0) + 1) -> 1 2 3 5 8 13 ....

    //loop that generates sum of previous index up to index given
    let result = 1;
    let add = 1;
    let storePrevious = 0;

    for (let i = 0; i < index - 2; i++) {
        storePrevious = result;
        result += add;
        add = storePrevious; 
    }


    if (index < 0) {
        return 'OOPS'
    }
    else {
        return Number(result);
    }
};

// Do not edit below this line
module.exports = fibonacci;
