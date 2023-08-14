const findTheOldest = function(people) {
    //people is an array of object
    
    //loop through every object in people
    let currentOldest = 0;
    let senior;

    for (const person of people) {
        //if a person still alive
        if (person.yearOfDeath === undefined) {
            person.yearOfDeath = new Date().getFullYear();
        }

        //find person's age
        let age = person.yearOfDeath - person.yearOfBirth;

        //check if recent object is the oldest and store name in 'oldest'
        if (age > currentOldest) {
            senior = person.name;
            currentOldest = age;
        }
    }

    return senior;
};

// Do not edit below this line
module.exports = findTheOldest;
