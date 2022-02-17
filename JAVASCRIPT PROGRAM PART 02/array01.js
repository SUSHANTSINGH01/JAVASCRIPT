// important array methods 

const numbers = [4,2,5,8];

function myFunc(number, index){
    console.log(`index is ${index} number is ${number}`);
}

numbers.forEach(function(number,index){
    console.log(`index is ${index} number is ${number}`);
});

numbers.forEach(function(number, index){
    console.log(number*9, index);
})

const users = [
    {firstName: "sushant", age: 22},
    {firstName: "mohit", age: 23},
    {firstName: "nitish", age: 24},
    {firstName: "bipul", age: 24},
]
// foreach function
users.forEach(function(user){
    console.log(user.firstName);
});

// users.forEach((user, index)=>{
//     console.log(index,user.firstName);
// })

// for(let user of users){
//     console.log(user.firstName);
// }


