var fs = require('fs');

console.log('program started');

const data = fs.readFileSync('example.txt');
const data2 = fs.readFileSync('example2.txt');

console.log(data.toString());
console.log(data2.toString());


console.log('End program');