// intro to arrays 
// reference type 
// how to create arrays

// ordered collection of items 

let fruits = ["apple", "mango", "grapes"];
let numbers = [1,2,3,4];
 // adding number array into another array
let mixed = [1,2,2.3, "string", null, undefined,...numbers];
console.log(mixed);
console.log(numbers);
console.log(fruits[2]);
//let fruits = ["apple", "mango", "grapes"];
let obj = {}; // object literal
// console.log(fruits);
// fruits[1] = "banana";
// console.log(fruits);
console.log(typeof fruits);
console.log(typeof mixed);
console.log(typeof obj);
console.log(Array.isArray(fruits));
console.log(Array.isArray(obj));


// array indexing 