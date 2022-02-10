// object destructuring
const band = 
{
    band_name : "heavy_wire",
    famousSong : "stairway to heaven",
    year: 2022,
    anotherFamousSong : "lufi_songs",
  };
  
  let { band_name, famousSong, ...rest_properties } = band;
  console.log(band_name);
  console.log(rest_properties);
  
  // objects inside array 
// very useful in real world applications

const users = [
    {unser_no : 1, first_name : 'sushant', gender: 'male'},
    {unser_no : 2, first_name : 'mohit',  gender: 'male'},
    {unser_no : 3, first_name : 'nitish', gender: 'male'},
]

for(var user of users)
console.log(user. first_name);


// nested destructuring 


const [{first_name : user_01},  user_no, {gender : user_03}] = users;
console.log(user_01);
console.log(user_no);
console.log(user_03);
