// iterables 
// in which for of loop can be used
// examples : string , array 

const firstName = "Sushant";
// for of loop
for(let char of firstName){
    console.log(char);
}

const items = ['item1', 'item2', 'item3'];
for(let item of items){
    console.log(item);
}

// array like object 
// those have length property
// and can be accessed by index
// example :- string 

const firstName1 = "Sushant";
console.log(firstName1.length);
console.log(firstName1[2]);