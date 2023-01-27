var fs = require('fs');

console.log('program started');

// Reading files the non-blocking way

fs.readFile('example.txt', results);

for ( i=0; i < 15; i++){
    console.log("Node continues working whilst file is being read...")
}

function results(err, data){
    if(err) return console.error(err);
    console.log('Results of fileread:');
    console.log(data.toString());
}

// console.log('End program');