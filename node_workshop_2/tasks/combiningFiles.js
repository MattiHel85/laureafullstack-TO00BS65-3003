var fs = require('fs');

console.log('program started');

const data = fs.readFileSync('example.txt');
const data2 = fs.readFileSync('example2.txt');

fs.writeFile("combinedexamples.txt", "I wrote this\n", (err) => {
    if(err) throw err;
    
    fs.appendFile("combinedexamples.txt", `${data}\n`, (err) => {
        if(err) throw err;
        fs.appendFile("combinedexamples.txt", `${data2}\n`, (err) => {
            if(err) throw err;
            fs.appendFile("combinedexamples.txt", "I wrote this!", (err) => {
                if(err) throw err;
                console.log(fs.readFileSync("combinedexamples.txt", "utf-8"));
                console.log('End program');
            })
        })
    })
});
