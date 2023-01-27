const fs = require('fs');

fs.unlink('combinedexamples.txt', (err) => {
    if(err) throw err;
    console.log('File successfully deleted');
});