function changep()
{
    var para = document.getElementsByTagName("p");
   // para[0].style.fontSize = 45;
    //para[1].style.fontcolor = "green";
    //para[2].style.fontStyle = "italic";

    for(var i=0;i<para.length;i++)
    {
        para[i].style.fontWeight = "bold";
    }
}