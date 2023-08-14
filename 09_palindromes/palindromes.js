const palindromes = function (input) {
    //turn arguments to uppercase strings
    let upperInput = String(input).toUpperCase();

    //make sure upperInput consists of only alphabet
    const preIterableString = Array.from(upperInput);

    //  /^[A-Z0-9]+$/ checks if a string
    //  consists of only upperalpha-numeric 
    //  (javaScirpt has no char, only string which in this case mean elements in 
    //  preIterableString is a string data)
    const iterableString = preIterableString.filter(
        element => /^[A-Z0-9]+$/.test(element)
    )
    
    //return if iterableString value equal to reverse one
    return iterableString.join('') === iterableString.reverse().join(''); 

};

// Do not edit below this line
module.exports = palindromes;
