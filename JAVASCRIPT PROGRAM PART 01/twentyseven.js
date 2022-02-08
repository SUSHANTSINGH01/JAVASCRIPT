// while loop in array 
const frt = ["apple", "mango", "grapes"];
const frt2 = [];
let i = 0;
while(i<frt.length)
{
    frt2.push(frt[i].toUpperCase());
    i++;
}
console.log(frt2);

// for of loop in array
const fruits_name = ["apple", "mango", "grapes", "fruit4", "fruit5"];
const fruits_name2 = [];

for(let i = 0; i<fruits_name.length; i++)
console.log(fruits_name[i]);


// for in loop in array
const fruits = ["apple", "mango", "grapes", "fruit4", "fruit5"];
const fruits2 = [];

for(let index in fruits){
    fruits2.push(fruits[index].toUpperCase());
}
console.log(fruits2);