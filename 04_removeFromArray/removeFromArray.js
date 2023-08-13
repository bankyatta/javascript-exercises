const removeFromArray = function(array, ...elements) {

    const newArray = array.filter(
        element => !elements.includes(element) 
    );

    return newArray;

};

// Do not edit below this line
module.exports = removeFromArray;
