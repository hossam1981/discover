const fs = require('fs'); // require the module core

// we use a method  to write on print on another file fs.writeFile(filename,
// data , call back fn);

fs.readFile("objectOreinted.txt", 'utf-8', function (err, data) {
    console.log(data);
    let data2 = JSON.parse(data);
    console.log(`${data2[1].name} is a ${data2[1].job}`);
})
