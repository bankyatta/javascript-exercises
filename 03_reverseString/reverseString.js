const reverseString = function(word) {

    let reverseString = '';

    for (let i = word.length - 1; i > -1; i--) {
        reverseString += word[i];
    }

    return reverseString;

};

// Do not edit below this line
module.exports = reverseString;
