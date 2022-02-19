// Maps
// map is an iterable

// store data in ordered fashion

// store key value pair (like object)
// duplicate keys are not allowed like objects


// different between maps and objects

// objects can only have string or symbol
// as key 

// in maps you can use anything as key
// like array, number, string 

// object literal 
// key -> string 
// key -> symbol
const person = {
    firstName : "Sushant",
    age: 7,
    1:"one"
}
console.log(person.firstName);
console.log(person["firstName"]);
console.log(person[1]);
for(let key in person){
    console.log(typeof key);
}

// key value pair 
const personn = new Map();
personn.set('firstName', 'sushant');
personn.set('age', 7);
personn.set(1,'one1');
personn.set([1,2,3],'onetwothree');
personn.set({1: 'one'},'onetwothree');
console.log(personn);
console.log(personn.get(1));
for(let key of personn.keys()){
    console.log(key, typeof key);
}
for(let [key, value] of personn){
    // console.log(Array.isArray(key));
    console.log(key, value)
}

const person1 = {
    id: 1,
    firstName: "sushant"
}
const person2 = {
    id: 2,
    firstName: "harshita"
}

const extraInfo = new Map();
extraInfo.set(person1, {age: 22, gender: "male"});
extraInfo.set(person2, {age: 23, gender: "female"});
// console.log(userInfo);
console.log(person1.id);
console.log(extraInfo.get(person1).gender);
console.log(extraInfo.get(person2).gender);
