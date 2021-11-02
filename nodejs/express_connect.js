const express = require('express');

const app = express();

app.get('/',function (req,res)
{
    res.send('hello everyone')
})

app.get('/sushant',function (req,res)
{
    res.send('welcome sushant')
})


app.get('/sushant/:id',function (req,res)
{
    const id = req.params.id
    res.send('welcome sushant : ' + id)
})

app.listen(9000,function (req,res)
{
    console.log("running up.....")
});
