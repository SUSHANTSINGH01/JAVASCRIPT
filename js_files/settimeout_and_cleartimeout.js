var ID=0;
function printmsg()
{
    document.getElementById("op2").innerHTML="1 seconds passed.";

}
function start()
{
    ID=window.setTimeout(printmsg,1000);
}
function stop()
{
    window.clearTimeout(ID);
}