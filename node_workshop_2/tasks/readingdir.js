const fs = require('fs');

fs.readdir(__dirname, {withFileTypes: false}, (err, files) => {
    if (err) throw err;

    files.forEach(file => {
        console.log(file)
    })
})

