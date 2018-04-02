'use strict';
let myTeam = 'Dameon and Suman';
console.log(myTeam);
console.log('Hello World');
console.log('We did it.');

function yearOfBirth(age){
  if(age < 0 ){
    throw new Error('Age cannot be negative');
  }
  else{
    let yearOfBirth = 2018 - age;
    return yearOfBirth;
  }    
}

function whoAmI(name,age){
  if (typeof name !== 'string' || isNaN(age)){
    console.log('Arguments not valid');
  }
  console.log(`My name is ${name} and I'm ${age} years old`);
  let yob = yearOfBirth(age);
  console.log('I was born in ' + yob);
}

whoAmI(5,5);