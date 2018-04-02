let myTeam = "Dameon and Suman";
console.log(myTeam);
console.log('Hello World');
console.log('We did it.');

function yearOfBirth(age){
    let yearOfBirth = 2018 - age;
    return yearOfBirth;
}

function whoAmI(name,age){
    console.log(`My name is ${name} and I'm ${age} years old`);
    let yob = yearOfBirth(age);
    console.log("I was born in " + yob);
}

whoAmI('suman',29);