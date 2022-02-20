function about(hobby, favMusician){
    console.log(this.firstName, this.age, hobby, favMusician);
}
const user1 = {
    firstName : "Sushant",
    age: 22,   
}
const user2 = {
    firstName : "mohit",
    age: 23,
    
}
//call
about.call(user1,"guitar","bach");
// apply
about.apply(user1, ["guitar", "bach"]);
// bind
const func = about.bind(user2, "guitar", "bach");
func();



const user3 = {
    firstName : "sushant",
    age: 22,
    about1 : function(){
        console.log(this.firstName, this.age);
    }   
}

// don't do this mistake 

// user1.about();
const myFunc1 = user3.about1.bind(user3);
myFunc1();

// arrow functions 

const user4 = {
    firstName : "Sushant",
    age: 22,
    about2 : (user) => {
        console.log(user.firstName, user.age);
    }   
}

user4.about2(user4);