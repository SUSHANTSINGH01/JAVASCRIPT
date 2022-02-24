function CreateUser(firstName, lastName, email, age, address)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
}
CreateUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`;
};
CreateUser.prototype.is18 = function (){
    return this.age >= 18; 
}
CreateUser.prototype.sing = function (){
    return "la ";
}


const user1 = new CreateUser('Sushant', 'rehan', 'Sushant@gmail.com', 18, "my address");
const user2 = new CreateUser('Shubham', 'rehan', 'Sushant@gmail.com', 19, "my address");
const user3 = new CreateUser('mohit', 'rehana', 'Sushant@gmail.com', 17, "my address");

for(let key in user1){
    // console.log(key);
    if(user1.hasOwnProperty(key)){
        console.log(key);
    }

}


let numbers = [1,2,3];

//console.log(Object.getPrototypeOf(numbers));
console.log(Array.prototype);
console.log(numbers);

// function hello(){
//     console.log("hello");
// }