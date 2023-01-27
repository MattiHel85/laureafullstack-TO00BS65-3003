var fs = require('fs');

console.log('program started');

const data = fs.readFileSync('example.txt');
const data2 = fs.readFileSync('example2.txt');

fs.mkdir('newdata', (err) => {
    fs.writeFile("./newdata/combinedexamples.txt", "I wrote this\n", (err) => {
        if(err) throw err;
        
        fs.appendFile("./newdata/combinedexamples.txt", `${data}\n`, (err) => {
            if(err) throw err;
            fs.appendFile("./newdata/combinedexamples.txt", `${data2}\n`, (err) => {
                if(err) throw err;
                fs.appendFile("./newdata/combinedexamples.txt", "I wrote this!", (err) => {
                    if(err) throw err;
                    console.log(fs.readFileSync("./newdata/combinedexamples.txt", "utf-8"));
                    console.log('End program');
                })
            })
        })
    });
})


