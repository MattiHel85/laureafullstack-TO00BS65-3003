var fs = require('fs');

console.log('program started');

fs.readFile('example.txt', results);

function results(err, data){
    if (err) return console.error(err);
    console.log('Results of fileread:');
    console.log(data.toString());
}

console.log('End program');