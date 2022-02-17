// map method 
const numbers = [3,4,6,1,8];

const square = function(number)
{
    return number*number;
}

const squareNumber = numbers.map((number, index)=>
{
    return index, number;
});

console.log(squareNumber);

const users = [
    {firstName: "Sushant", age: 22},
    {firstName: "mohit", age: 23},
    {firstName: "niteesh", age: 24},
    {firstName: "Bipul", age: 24},
]

const userNames = users.map((user)=>{
    return user.firstName;
});

console.log(userNames);