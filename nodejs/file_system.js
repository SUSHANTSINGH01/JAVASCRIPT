 var fs = require('fs');


 // write in file 

 // first way
    fs.writeFile("file_system.txt", 'hello, Sushant!', err => 
    {
        if(err)
        {
            console.log('error occured when writing to file');
        }
       
    });

// second way
/* fs.writeFile("file_system1.txt", 'console.log("done.")', function(err){
    
    console.log("Data Saved.");
}); */




// read a file
/*fs.readFile('add.js','utf8',function(err, data){

    console.log(data);

})*/



// append file
/*fs.appendFile("file_system1.txt",'added content.', function(err){
    
    console.log("Data Saved.");
});*/


// delete file
/*fs.unlink('file_system2.txt',function(err){
    
    console.log("deleted.");
});*/







    
    
