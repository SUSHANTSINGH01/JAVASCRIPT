// default parameter
     
     //  function addTwo(a,b){
    //     if(typeof b ==="undefined"){
    //         b = 0;
    //     }
    //     return a+b;
    // }




function add_two_number(a,b=0)
{
    return a+b;
}


const ans = add_two_number(8, 10);
console.log(ans);



// rest parameters 

     //   function my_func_01(a,b,...c){
    //     console.log(`a is ${a}`);
    //     console.log(`b is ${b}`);
    //     console.log(`c is`, c);
    // }
    
    // my_func_01(3,4,5,6,7,8,9);
    
    function addAll(...numbers){
        let total = 0;
        for(let number of numbers){
            total = total + number;
        }
        return total;
    }
    
    const res = addAll(4,5,4,2,10);
    console.log(res);



// param destructuring 

// object 
// react 

const person = 
{
    firstName: "sushant",
    gender: "male",
    age: 500
}

// function printDetails(obj){
//     console.log(obj.firstName);
//     console.log(obj.gender);
// }


function printDetails({firstName, gender, age})
{
    console.log(firstName);
    console.log(gender);
    console.log(age);
}

printDetails(person);


// callback functions 

function my_function_02(name){
    console.log("inside my func 2")
    console.log(`your name is ${name}`);
}

function my_func_01(callback){
    console.log("hello there I am a func and I can..")
    callback("harshit");
}


my_func_01(my_function_02);

// function returning function 

function my_function_03(){
    function hello(){
        return "hello world"
    }
    return hello;
}

const res1 = my_function_03();
console.log(res1());