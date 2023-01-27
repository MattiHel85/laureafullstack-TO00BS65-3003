var fs = require('fs');

console.log('program started');

const data = fs.readFileSync('example.txt');
console.log(data.toString());

for ( i=0; i < 5; i++){
    console.log("Node continues working whilst file is being read...")
}


console.log('End program');