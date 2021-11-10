function val_mobile()
{
   var text = document.getElementById("text1").value;
    
    var regx = /[6-9]\d{9}/;
    // var regx = /^[6-9]\d{9}$/;

    if(regx.test(text))
    {
        alert("valid number.");
        //document.getElementById("lbltext").innerHTML="valid";
        //document.getElementById("lbltext").style.visibilty="visible";
        //document.getElementById("lbltext").style.color="green";
    }
    else
    {
        alert("invalid number.");
        //document.getElementById("lbltext").innerHTML = "Invalid";
        //document.getElementById("lbltext").style.visibilty="visible";
        //document.getElementById("lbltext").style.color="green";
    }
    
}
