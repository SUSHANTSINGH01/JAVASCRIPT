 // below code is part of 1st and 2nd way 

/*function add(a,b)
{
    return a+b;
}
function substraction(a,b)
{
    return a-b;
}*/



// first way

/* module.exports = 
{
    add : add,
    substraction : substraction
};*/



// second and convenient way

/*module.exports.add = add;
module.exports.substraction = substraction;*/



// third way 

module.exports.add = (a,b) => a+b;
module.exports.substraction = (a,b) => a-b;
