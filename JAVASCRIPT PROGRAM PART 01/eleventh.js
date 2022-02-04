// undefined 
// null

let Name;
console.log(typeof Name);
Name = "Sushant";
console.log(typeof Name, Name);

let Var1 = null;
console.log(Var1);
Var1 = "Sushant";
console.log(Var1, typeof Var1);

// null is object
console.log(typeof null);
// bug , error 

// BigInt
let Number = BigInt(12);
let sameNumber = 163n;
console.log(Number);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number+sameNumber);
