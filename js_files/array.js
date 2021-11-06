// Use the following syntax to create an Array Object :

var arr = new Array("hello" , "hi" , "hey ");

// You can create array by simply assigning values as follows :

var arr1= ["hello", "hi", "hey"];
document.write(arr);
document.write("<br>");

// constructor : 

var arr2 = new Array( 10, 20, 30 );
document.write("\n" + "arr2.constructor is : " + arr2.constructor);
document.write("<br>");

// array length function : 

document.write("\n" + "arr.length is:" + arr.length);
document.write("<br>");

// array push function

arr.push(2);
document.write("\n" + "New length of arr is : " + arr.length);
document.write("<br>");

// join function

arr.join(",");
document.write(arr);
document.write("<br>");

// reverse

arr.reverse();
document.write("\n" + arr);



