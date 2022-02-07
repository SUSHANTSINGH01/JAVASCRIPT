// primitve vs reference data types
let num1 = 6;
let num2 = num1;
console.log("value is num1 is", num1);
console.log("value is num2 is", num2);
num1++;
console.log("after incrementing num1")
console.log("value is num1 is", num1);
console.log("value is num2 is", num2);


// reference types 
// array 
let arr = ["item1", "item2"];
let arr1 = arr;
console.log("arr", arr);
console.log("arr1", arr1);
arr.push("item3");
console.log("after pushing element to array 1");
console.log("arr", arr);
console.log("arr1", arr1);