
// const happ_birsthday = function(){
//     console.log("happy birthday to you ......");
// }

// arrow functions
const happy_birthday = () => {
    console.log("happy birthday to you ......");
}

happy_birthday();

const sum_three = (number1, number2, number3) => {
    return number1 + number2 + number3;
}

const ans = sum_three(2,3,4);
console.log(ans);

// const isEven = function(number){
//     return number % 2 === 0;
// }

const isEven = number => number % 2 === 0;


console.log(isEven(4));

const firstChar = anyString => anyString[0];

console.log(firstChar("Sushant"));


const findTarget = (array, target) => 
{
    for(let i = 0; i<array.length; i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}
const MyArray = [84,85,86,87];
console.log(findTarget(MyArray,86));


// hoisting 
// Hoisting is the default behavior of moving all the declarations at the top
// of the scope before code execution. 

hello();

function hello(){
    console.log("hello world");
}
// console.log(hello);
// const hello = "hello world";
// console.log(hello);


// functions inside function 
function app(){
    const myFunc = () =>{
        console.log("hello from myFunc")
    }
    
    const add_two_number = (num1, num2) =>{
        return num1 + num2;
    }

    const mul = (num1, num2) => num1* num2;

    console.log("inside app");
    myFunc();
    console.log(add_two_number(2,3));
    console.log(mul(2,3));
}
app();