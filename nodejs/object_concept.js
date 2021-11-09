class Users
{
    constructor()
    {
        this.name = "Sushant Singh";
        this.age = 28;
    }
    getname()
    {
        this.email = "singhsushant101100@gmail.com";
        return this.name;
    }
    getage()
    {
        return this.age;
    }

    getEmail()
    {
        return this.email;
    }
}

var user = new Users();
console.log(user.getname());
console.log(user.getage());

// console.log(user.getemail());
