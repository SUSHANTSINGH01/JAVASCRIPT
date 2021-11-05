<html>
<head>
<script type="text/javascript">

function ReadCookie()
{
    var cookies_all = document.cookie;
    document.write ("All Cookies : " + cookies_all );
    
    // Get all the cookies pair in a array
    cookie_array = cookies_all.split(';');
   
    // Now take key value pair out from array
    for(var i=0; i<cookie_array.length; i++)
    {
        name = cookie_array[i].split('=')[0];
        value = cookie_array[i].split('=')[1];
        document.write ("Key is : " + name + " and Value is : " + value);
    }
}

</script>
</head>
<body>
<form name="cookie_form" action="">
<p> click the following button and see the result:</p>
<input type="button" value="Get Cookie" onclick="ReadCookie()"/>
</form>
</body>
</html>
