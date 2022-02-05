// and  or operator 



// if(firstName[0] === "H"){
//     console.log("your name starts with H")
// }

// if(age > 18){
//     console.log("you are above 18");
// }

// if(firstName[0] === "H" && age>18){
//     console.log("Name starts with H and above 18");
// }else{
//     console.log("inside else");
// }

let firstName = "sushant";
let age = 21;

if(firstName[0] === "H" || age>18){
    console.log("inside if block");
}else{
    console.log("inside else block");
}