<html>
    <head>
        <title>
            set up jquery
        </title>

    </head>
    <body>
        <h2 id="heading1"> setting up jquery. </h2>
        <button onclick="fn1()" id="btn1"> click me </button>
    </body>

    <script src = "jquery.js"></script>
    <script>
    function fn1()
    {
       $("#heading1").fadeToggle(2000);
    }
    </script>
   
</html>
