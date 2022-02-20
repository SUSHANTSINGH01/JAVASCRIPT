// methods
// function inside object

function personInfo(){
    
    console.log(`person name is ${this.firstName} and age is ${this.age}`);
}

const person1 = {
    firstName : "Sushant",
    age: 22,
    about: personInfo
}
const person2 = 
{
    firstName : "mohit",
    age: 23,
    about: personInfo
}
const person3 = {
    firstName : "niteesh",
    age: 24,
    about: personInfo
}

person1.about();
person2.about();
person3.about();

// window object

console.log(window);
"use strict";
function myFunc(){
    
    console.log(this);
}
myFunc();