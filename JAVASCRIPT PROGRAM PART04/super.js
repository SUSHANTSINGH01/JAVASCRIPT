// // super 
// class Animal {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     eat(){
//         return `${this.name} is eating`;
//     }

//     isSuperCute(){
//         return this.age <= 1;
//     }

//     isCute(){
//         return true;
//     }
// }

// class Dog extends Animal{
//     constructor(name, age, speed){
//         super(name,age);
//         this.speed = speed;
//     }

//     run(){
//         return `${this.name} is running at ${this.speed}kmph`
//     }
// } 
// // object / instance 
// const tommy = new Dog("tommy", 3,45);
// console.log(tommy.run());


// same method in subclass
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
    constructor(name, age, speed){
        super(name,age);
        this.speed = speed;
    }

    eat(){
        return `Modified Eat : ${this.name} is eating`
    }

    run(){
        return `${this.name} is running at ${this.speed}kmph`
    }
} 
// object / instance 
// const tommy = new Dog("tommy",21,88); // calling eat function for dog 
// console.log(tommy.run());
// console.log(tommy.eat());

const animal1 = new Animal('sheru', 21); // calling eat function for animal
console.log(animal1.eat());