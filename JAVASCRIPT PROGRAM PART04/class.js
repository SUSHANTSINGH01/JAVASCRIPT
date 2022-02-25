// 2015 / es6 
// class keyword 
// class are fake

class CreateUser{
    constructor(firstName, lastName, email, age, address){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
    }

    about()
    {
        return `${this.firstName} is ${this.age} years old.`;
    }
    is18()
    {
        return this.age >= 18;
    }
    sing()
    {
        return "la la";
    }

}


const user1 = new CreateUser('Sushant', 'niyaat', 'Sushant@gmail.com', 18, "my address");
const user2 = new CreateUser('hayat', 'niyaat', 'Sushant@gmail.com', 19, "my address");
const user3 = new CreateUser('mohit', 'niyaata', 'Sushant@gmail.com', 17, "my address");
console.log(Object.getPrototypeOf(user1));



// extend

class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    eat(){
        return `${this.name} is eating`;
    }

    isSuperCute(){
        return this.age <= 1;
    }

    isCute(){
        return true;
    }
}

class Dog extends Animal{
    
} 

const tommy = new Dog("tommy", 3);
console.log(tommy);
console.log(tommy.isCute());
