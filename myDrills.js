'use strict';
// function jediName(lastName,firstName){
//   let str = lastName.substring(0,3);
//   let str1 =firstName.substring(0,2);
//   console.log(str+str1);

// }
// jediName('Mendoza','Dameon');


// function beyond(num){
//   if(!isFinite(num)){
//     console.log('And beyond');
//   }
//   if(isFinite(num)&&num>0){
//     console.log('To infinity');
//   }
//   if (isFinite(num)&&num<0){
//     console.log('To negative infinity');
//   } 
//   if (num === 0) {
//     console.log('Staying Home');
//   }
// }



// beyond(0);
// let string =  'craft block argon meter bells brown croon droop';

// let arr = string.split(' ');
// let newArr = [];


// function decode(word){
      
//   if (word.charAt(0)==='a'){
//     return word.charAt(1);
//   }
//   if (word.charAt(0)==='b'){
//     return word.charAt(2);
//   }if (word.charAt(0)==='c'){
//     return word.charAt(3);
//   }if (word.charAt(0)==='d'){
//     return word.charAt(4);
//   }else {
//     return ' ';
//   }
// }
// for (let i = 0; i < arr.length;i++){
//   let letter = decode(arr[i]);
//   newArr.push(letter);}

// console.log(newArr.join(''));



// function numberOfDays(month,leapYear=false){
//   switch(month){
//   case 'january':
//   case 'march':
//   case 'may':
//   case 'july':
//   case 'august':
//   case 'october':
//   case 'december':
//     return `${month} has 31 days.`;
//     break;
//   case 'april':
//   case 'june':
//   case 'september':
//   case 'november':
//     return  `${month} has 30 days.`;
//     break;
//   case 'february':
//     if (leapYear){
//       return `${month} has 29 day`;
//       break;
//     } else {
//       return `${month} has 28 days`;
//       break;
//     }
//   default: 
//     return 'Must provide a valid month';
//   }
// }
// console.log(numberOfDays('jay'));




const randomNo = Math.floor(Math.random() * 3) + 1;
let random = Math.floor(Math.random() * 3) + 1;
function game(randomNo,random){
  if (random===1&&randomNo===2){
    console.log('lose');
  } else if(random===1&&randomNo===3){
    console.log('win');
  } else if(random ===2&&randomNo===3){
    console.log('lose');
  } else if (random ===2 && randomNo===1){
    console.log('win');
  } else if (random === 3 && randomNo ===1){
    console.log('lose');
  } else if (random ===3 && randomNo === 2){
    console.log('win');
  } else {
    console.log('tie');
  }
}
game();























