// to delete files usually for deleting cookies files or the login files from ur server

var hello = require('fs');
hello.unlink('./test.txt', function(err){
   if(err){
       console.log(`an error occurred: ${err}`);
       throw err;
        } 
});