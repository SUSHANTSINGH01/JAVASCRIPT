// lexical scope 
const new_var = "value1";

function myApp(){
    

    function func_new(){
        // const new_var = "value59";
        const func_new2 = () =>
        {
            console.log("inside func_new", new_var);
        }
        func_new2();
    }


    console.log(new_var);
    func_new();
}

myApp();


// block scope vs function scope 


// let and const are block scope
// var is function scope 

// if(true){
//     var firstName = "sushant";
//     console.log(firstName);
// }

// console.log(firstName);

function myApp1(){
    if(true){
        // if we have let in place var then second and third console show error
        var firstName1 = "sushant";
        console.log(firstName1);
    }

    if(true){
        console.log(firstName1);
    }
    console.log(firstName1);
}

myApp1();