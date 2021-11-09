function classid()
{
    var para1 = document.getElementsByTagName("p");
    var para = document.getElementsByClassName("mypara");
    for(var i=0;i<para.length;i++)
    {
        para[i].style.fontWeight = "bold";
        para[i].style.color = "green";
    }
    for(var i=0;i<para1.length;i++)
    {
        para1[i].style.fontSize = 45;
        
    }
   
}