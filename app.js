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
  if (typeof name !== 'string'){
    throw new Error('Name is not string');
  } 
  if(isNaN(age)){
    throw new Error('age is not number');
  }
  console.log(`My name is ${name} and I'm ${age} years old`);
  let yob = yearOfBirth(age);
  console.log('I was born in ' + yob);
}

whoAmI('suman',29);