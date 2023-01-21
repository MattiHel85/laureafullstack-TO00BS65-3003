var fs = require('fs');

console.log('program started');

fs.readdir('../', function(err, data) {
    if (err) return console.error(err);
    console.log('Results of readdir:');
    console.log(data.toString());
    console.log(data);
})

console.log('End program');