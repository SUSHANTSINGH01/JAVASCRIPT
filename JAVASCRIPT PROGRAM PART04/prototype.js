// first approach

// const userMethods = {
//     about : function(){
//         return `${this.firstName} is ${this.age} years old.`;
//     },
//     is18 : function(){
//         return this.age >= 18;
//     },
//     sing: function(){
//         return 'toon na na na la la ';
//     }
// }
function createUser(firstName, lastName, email, age, address){

    // second approach
    const user = Object.create(createUser.prototype);// {}
    
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}
createUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`;
};
createUser.prototype.is18 = function (){
    return this.age >= 18; 
}
createUser.prototype.sing = function (){
    return "la la ";
}


const user1 = createUser('Sushant', 'rehan', 'Sushant@gmail.com', 18, "my address");
const user2 = createUser('Shubham', 'rehan', 'Sushant@gmail.com', 19, "my address");
const user3 = createUser('mohit', 'rehan', 'Sushant@gmail.com', 17, "my address");
console.log(user1);
console.log(user1.is18());
console.log(user2.sing());
console.log(user3.is18());