const fs = require('fs');


    fs.writeFile("file_system2.txt", 'hello, Sushant!', err => 
    {
        if(err)
        {
            console.log('error occured when writing to file');
        }
        
    });
    
