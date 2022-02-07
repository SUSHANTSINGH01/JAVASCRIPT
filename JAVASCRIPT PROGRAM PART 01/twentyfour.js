// array push pop 

// use const for creating array

const fruitss = ["apple", "mango"]; // 0x11
fruits.push("banana");
console.log(fruitss);

// array shift unshift 

let fruits = ["apple", "mango", "grapes"];
console.log(fruits);
// push 
fruits.push("banana");
console.log(fruits);
// pop 
let pop_fruit = fruits.pop();
console.log(fruits);
// console.log("popped fruits is", pop_fruit);

// unshift is used to add element in the starting

fruits.unshift("banana");
fruits.unshift("myfruit");
console.log(fruits);

// shift 
let rm_fruit = fruits.shift();
console.log(fruits);
// console.log("removed fruits is ", rm_fruit);

// how to clone array 

// how to concatenate two arrays

let array1 = ["item1", "item2"];
let array2 = ["item1", "item2"];

// way to slice and concat
let arrayy2 = array1.slice(0).concat(["item3", "item4"]);
console.log(arrayy2);

// new way
array2 = ["hello"].concat(array1,["item3", "item4"]);
console.log(array2);



// spread operator
let newarray = ["item3", "item4"]
let arr2 = [...array1, ...newarray];

array1.push("item3");

console.log(array1===arr2);
console.log(array1)
console.log(arr2)