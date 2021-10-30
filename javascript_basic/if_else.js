var price=1500500;
if(price>70000)
{
   console.log("price is more than 7000000.");
   if(price>1000000)
   {
       console.log("price is more than 1000000.");
       if(price>1500000)
       console.log("price is more than 1500000.");
   }
   else 
   console.log("price is between 700000 and 1000000.");
}
else
console.log("price is less than or equal to 700000.");
