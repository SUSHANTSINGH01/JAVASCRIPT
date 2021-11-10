function val_email()
{
   var text = document.getElementById("text1").value;
    
   var regx = /^([a-z 0-9\.-]+)@([a-z 0-9-]+).([a-z]{2,8}).(.[a-z]{2,8})$/;

    if(regx.test(text))
    {
        alert("valid email.");
        document.getElementById("lbltext").innerHTML="valid";
        document.getElementById("lbltext").style.visibilty="visible";
        document.getElementById("lbltext").style.color="green";
    }
    else
    {
        alert("invalid email.");
        //document.getElementById("lbltext").innerHTML = "Invalid";
        //document.getElementById("lbltext").style.visibilty="visible";
        //document.getElementById("lbltext").style.color="green";
    }
    
}
