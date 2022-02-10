function singHappyBirthday(){
    console.log("happy birthday to you ......");
}

// function sumThreeNumbers(number1, number2, number3){
//     return number1 + number2 + number3;
// }



// isEven
// input : 1 number 
// output : true , false 
var number = 87;
function isEven(number){
    return number % 2 === 0;
}

console.log(isEven(number));

// function 
// input : string 
// output: firstCharacter 

var anystring = "Sushant"
function firstChar(anyString){
    return anyString[0];
}

console.log(firstChar("anystring"));

// function 
// input : array, target (number)
// output: index of target if target present in array 


function findTarget(array, target)
{
    for(let i = 0; i<array.length; i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}
const myArray = [1,3,85,90]
const ans = findTarget(myArray, 8);
console.log(ans);

// function expression 
const singBirthday = function(){
    console.log("happy birthday to you ......");
}

// singHappyBirthday();
const sumThreeNumber = function(number1, number2, number3){
    return number1 + number2 + number3;
}
const res = sumThreeNumber(2,3,4);
console.log(res);


// function isEven(number){
//     return number % 2 === 0;
// }
const is_even = function(number){
    return number % 2 === 0;
}
console.log(is_even(87));

// const firstChar = function(anyString){
//     return anyString[0];
// }

const find_num = function(array, target){
    for(let i = 0; i<array.length; i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}
let res1=find_num(myArray,85);
console.log(res1);