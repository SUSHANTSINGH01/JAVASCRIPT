function validatexp()
{
    var username = document.getElementById("uname").value;
    //var regx = /E00/;
    //var regx = /[sdp]imple/;
    //var regx = new RegExp("E00","i");
    //var regx = /[a-x A-X]00/;
    //var regx = /[0-5]a[6-9][a-z]/
    var regx = /[^abc]abc/;
    if(regx.test(username))
    {
        alert("valid username.");
        document.getElementById("username").style.visibility = "hidden";
    }
    else
    {
        alert("Invalid username.");
    }

}