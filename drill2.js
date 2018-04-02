function jediName(firstName,lastName){
    let str1 = lastName.substring(0,3);
    let str2 = firstName.substring(0,2);
   console.log(str1+str2);
}

jediName('suman','bandita');

function beyond(num){
    if(isFinite(num)){
        if(num === 0){
            console.log("Staying Home");
        }
        if(num > 0){
            console.log("To infinity");
        }
        if(num < 0){
            console.log("To negative infinity");
        }            
    }
    else{
        console.log("And beyond");
    }
}

beyond(32);
beyond(-32);
beyond(0);
beyond(32/0);

// Cracking the code
function decode(str){
    let emptyString = '';
    switch(str.charAt(0)){
        case 'a':
            emptyString = emptyString + str.charAt(1);
            break;
        case 'b':
            emptyString = emptyString + str.charAt(2);
            break;
        case 'c':
            emptyString = emptyString + str.charAt(3);
            break;
        case 'd':
            emptyString = emptyString + str.charAt(4);
            break;
        default:
            emptyString = emptyString + ' ';
    }
    return emptyString;
}

let sentence = 'craft block argon meter bells brown croon droop';
let arr = sentence.split(' ');
let str = '';
for(let i = 0; i< arr.length; i++ ){    
    str = str + decode(arr[i]);    
}
console.log(str);

// How many days in a month

function numberOfDays(month,leapYear = false){
    switch(month){
        case 'january':
        case 'march':
        case 'may':
        case 'july':
        case 'august':
        case 'october':
        case 'december':
            return `${month} has 31 days`;
            break;
        case 'april':        
        case 'june':
        case 'september':
        case 'november':     
            return `${month} has 30 days`;
            break;
        case 'february':
            if(leapYear === false)
                return `February has 28 days`;
            else    
                return `February has 29 days`;
                break;
        default:
            throw new Error('Must provide a valid month');
            break;
    }
}
console.log(numberOfDays('february'));

// ROCK PAPER SCISSOR 
let rock = 1;
let paper = 2;
let scissors = 3;
function computer(){
    const randomNoComp = Math.floor(Math.random() * 3) + 1;
    return randomNoComp;
}
function me(){
    const randomNoMe = Math.floor(Math.random() * 3) + 1;
    return randomNoMe;
}

function game(compRetVal = computer(),meRetVal = me()){
    // let rock = 1; paper = 2; scissors = 3;
    // 1 BEATS 3,               
    // 3 BEATS 2,               
    // 2 BEATS 1,
    console.log(`computer = `+ compRetVal + ` , me = ` + meRetVal);               
    if(compRetVal === meRetVal)
        return `Tie`;
    else if(compRetVal === 1 && meRetVal === 3)
        return `Computer wins`;   
    if(compRetVal === 3 && meRetVal === 2)
        return `Computer wins`;
    if(compRetVal === 2 && meRetVal === 1)
        return `Computer wins`;
    else 
        return `Player wins`;
}
console.log(game());