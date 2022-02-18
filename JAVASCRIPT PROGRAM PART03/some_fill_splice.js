// some method 

const numbers = [3,5,11,9,10];

const ans = numbers.some((number)=>number%2===0);
console.log(ans);

const userCart = [
    {productId: 1, productName: "mobile", price: 42000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 35000},
    {productId: 3, productName: "macbook", price: 25000},
]

const ans1 = userCart.some((cartItem)=>cartItem.price > 21000);
console.log(ans1);

// fill method 
// value , start , end 

const myArray = new Array(10).fill(0);
console.log(myArray);

const myArray1 = [1,2,3,4,5,6,7,8];
myArray1.fill(0,2,5);
console.log(myArray1);

// splice method 
// start , delete , insert 

const myArray2 = ['item1', 'item2', 'item3'];

// delete
const deletedItem = myArray2.splice(1, 2);
console.log("deleted item", deletedItem);
// insert 
myArray2.splice(1, 0,'inserted item1');

// insert and delete 
const deletedItem1 = myArray2.splice(1, 2, "inserted item1", "inserted item2")
console.log("delted item", deletedItem1);
console.log(myArray2);