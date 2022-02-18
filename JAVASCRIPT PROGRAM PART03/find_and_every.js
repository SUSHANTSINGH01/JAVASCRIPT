// find method 

const myArray = ["Hello", "catt", "dog", "lion","rat","chat"];

// function isLength3(string){
//     return string.length === 3;
// }

const str="abcd"

const ans = myArray.find((string)=>
    string.length===3
);

// const res = isLength3(str)


console.log(ans);
// console.log(res);

const users = [
    {userId : 1, userName: "Shubham"},
    {userId : 2, userName: "Bipul"},
    {userId : 3, userName: "biswajit"},
    {userId : 4, userName: "mohit"},
    {userId : 5, userName: "rehman"},
];

const myUser = users.find((user)=>user.userId===3);
console.log(myUser);


// every method
const numbers = [2,4,6,9,10];


const rees = numbers.every((number)=>number%2===0);

console.log(rees);

const userCart = [
    {productId: 1, productName: "mobile", price: 42000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 35000},
]


const ans1 = userCart.every((cartItem)=>cartItem.price>21000);
console.log(ans1);