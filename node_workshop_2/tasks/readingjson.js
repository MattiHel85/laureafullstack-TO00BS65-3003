const http = require('http');
const fs = require("fs");

// READ THE JSON FILE
let jsonData = fs.readFileSync("./sampledata.json");

// PARSE THE JSON
let jsonContents = JSON.parse(jsonData);

// create objecto to push to jsonContent variable
let data = {
    name:"John Doe",
    age: 52,
    company:"Laurea",
    address:"Ratatie 22"
};
// push object to jsonContents variable
jsonContents.push(data);

// check the data is up to date
// console.log(jsonContents);

// Test the delete function
// delete jsonContents[0];

// Test the deletion
// console.log(jsonContents);

// Make new data JSON compatible
let newData = JSON.stringify(jsonContents);


// Push to new JSON file
fs.writeFile("dataset.json", newData, (err) => {
    if (err) throw err;
    console.log('Dataset created successfully')
})

var server = http.createServer(function (req, res) {
    // res.writeHead(200, {'Content-Type': 'text/html'});

    if (req.url === "/") {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(fs.readFileSync("./dataset.json", "utf-8"))
    } 
        
    res.end();
});

var port = process.env.PORT || 3000;

server.listen(port);

console.log('Server is running at http://localhost:%d', port);