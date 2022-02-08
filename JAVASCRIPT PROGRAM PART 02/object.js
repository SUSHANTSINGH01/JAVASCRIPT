// objects reference type  
// arrays are good but not sufficient 
// for real world data 
// objects store key value pairs 
// objects don't have index

// how to create objects 

// const person = {name:"Sushant",age:22}; // valid
const person = {
    name: "Sushant",
    age: 22,
    hobbies: ["guitar", "sleeping", "listening music"]
}
console.log(person);

// how to access data from objects 
console.log(person["name"]);// bracket notation
console.log(person["age"]);
console.log(person.hobbies);// dot notation

// how to add key value pair to objects
person["gender"] = "male";
console.log(person);



// difference between dot and bracket notaion
const key1 = "email";
const person1 = {
    name: "sushant",
    age: 22,
    "person hobbies": ["guitar", "sleeping", "listening music"]

}

console.log(person1["person hobbies"]);
person1[key1] = "sushantvashisth@gmail.com";
console.log(person1);


// how to iterate object 

// for in loop 
// Object.keys 

for(let key in person){
    // console.log(`${key} : ${person[key]}`);
    console.log(key," : " ,person[key]);
}

// object.keys(person) can be replaced with only (person)
console.log(typeof ((person)));

// object.keys(person) can be replaced with only (person)
const val = Array.isArray((Object.keys(person)));
console.log(val);

for(let key of Object.keys(person)){
    console.log(person[key]);
}


// computed properties

const keyy1 = "objkey1";
const keyy2 = "objkey2";

const valuee1 = "myvalue1";
const valuee2 = "myvalue2";

// const obj = {
//     objkey1 : "myvaluee1",
//     objkey2 : "myvaluee2",
// }

// const obj = {
//     [keyy1] : valuee1,
//     [keyy2] : valuee2
// }

const obj = {};
obj[keyy1] = valuee1;
obj[keyy2] = valuee2;

console.log(obj);