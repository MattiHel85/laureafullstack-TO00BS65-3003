const fs = require('fs');

// CREATE DIRECTORY

// fs.mkdir('testDirectory', (err) => {
//     if (err) throw err;

//     console.log('Directory created');
// })

// REMOVE DIRECTORY

fs.rmdir('testDirectory', (err) => {
    if (err) throw err;

    console.log('Directory removed');
})