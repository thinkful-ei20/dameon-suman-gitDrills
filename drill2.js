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