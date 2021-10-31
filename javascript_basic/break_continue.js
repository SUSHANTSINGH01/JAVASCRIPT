// break statement
var x=1;
console.log("Break statement demo of loop.");
while(x<10)
{
    if(x==5)
    break; 
    x++;
    console.log("x is : " + x);
}
console.log("Exiting of loop.");



// continue statement
var x = 1;
console.log("Continue statement demo of loop.");
while (x<10)
{
    x=x+1;
    if(x==5)
    continue;
    console.log("x is : " + x);
}
console.log("Exiting of loop.");
