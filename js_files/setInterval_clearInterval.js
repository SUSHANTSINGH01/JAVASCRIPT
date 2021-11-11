var ID1=0;
var seconds=0;
function printmsg1()
{
    document.getElementById("op3").innerHTML= seconds + " seconds";
    seconds++;
}
function start1()
{
    ID1=window.setInterval(printmsg1,1000);
}
function stop1()
{
    window.clearInterval(ID1);
}