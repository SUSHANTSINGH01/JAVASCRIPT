const user1 = {
    firstName : "harshit",
    age: 8,
    about: function(){
        console.log(this.firstName, this.age);
    }   
}

// const user1 = {
//     firstName : "harshit",
//     age: 8,
//     about(){
//         console.log(this.firstName, this.age);
//     }   
// }



user1.about();


// function (that function create object)
// 2.) add key value pair 
// 3.) object ko return krega 

function createUser(firstName, lastName, email, age, address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = function(){
        return `${this.firstName} is ${this.age} years old.`;
    };
    user.is18 =  function()
    {
        return this.age >= 18;
    }
    return user;
}

const user2 = createUser('sushant', 'mohit', 'sushant@gmail.com', 19, "my address");
console.log(user2);
const is18 = user2.is18();
const about = user2.about();
console.log(about);