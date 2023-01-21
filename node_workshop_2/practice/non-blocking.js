var fs = require('fs');

console.log('program started');

// Reading files the non-blocking way

fs.readFile('example.txt', function(err, data) {
    if (err) return console.error(err);
    console.log("results of fileread:");
    console.log(data.toString());
})

for ( i=0; i < 5; i++){
    console.log("Node continues working whilst file is being read...")
}


console.log('End program');