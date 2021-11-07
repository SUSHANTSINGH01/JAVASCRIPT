// this file needed add.js file 

var it = require('./add.js');

function greet(name)
{
    console.log("hello, " + name + "!");
}

greet("Sushant Singh");

it.add(10,20);
console.log("sum of number a and b is : " + it.add(10,20));
it.substraction(20,10);
console.log("substract b from a is : " + it.substraction(20,10));
