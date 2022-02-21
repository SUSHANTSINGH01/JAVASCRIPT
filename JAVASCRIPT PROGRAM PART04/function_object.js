// const userMethods = {
//     about : function(){
//         return `${this.firstName} is ${this.age} years old.`;
//     },
//     is18 : function(){
//         return this.age >= 18;
//     }
// }

// function createUser(firstName, lastName, email, age, address){
//     const user = {};
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     user.about = userMethods.about;
//     user.is18 = userMethods.is18;
//     return user;
// }

// const user1 = createUser('sushant', 'vashsith', 'sushant@gmail.com', 9, "my address");
// const user2 = createUser('harshit', 'vashsith', 'sushant@gmail.com', 19, "my address");
// const user3 = createUser('mohit', 'vashsitha', 'sushant@gmail.com', 17, "my address");
// console.log(user1.about());
// console.log(user3.about());

const userMethods = {
    about : function(){
        return `${this.firstName} is ${this.age} years old.`;
    },
    is18 : function(){
        return this.age >= 18;
    },
    sing: function(){
        return 'tara tu rara tu.';
    }
}
function createUser(firstName, lastName, email, age, address){
    const user = Object.create(userMethods);// {}
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}

const user1 = createUser('sushant', 'vashsith', 'sushant@gmail.com', 9, "my address");
const user2 = createUser('harshit', 'vashsith', 'sushant@gmail.com', 19, "my address");
const user3 = createUser('mohit', 'vashsitha', 'sushant@gmail.com', 17, "my address");
console.log(user1);
console.log(user1.about());
console.log(user3.sing());


const obj1 = {
    key1: "value1",
    key2: "value2"
}

// __proto__

// offical ecmascript documentation 

// [[prototype]]

// __proto__ , [[prototype]]



// prototype    

const obj2 = Object.create(obj1); // {}
obj2.key3 = "value3";
// obj2.key2 = "unique";
console.log(obj2);

console.log(obj2.__proto__);

