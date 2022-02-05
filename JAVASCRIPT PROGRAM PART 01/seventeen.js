// nested if else

// winning number 20

// 20 your guess is right 
// 18 too low 
// 22 too high 

let win_num = 20;
let user_guess = +prompt("Guess a number");

if(user_guess === win_num)
console.log("Your guess number is right!");

else
{
    if(user_guess < win_num)
    console.log("too low!");
    else
    console.log("too high!");
}