const http = require('http');
const fs = require("fs")

let jsonData = fs.readFileSync("./html/data/sampledata.json");
let jsonContents = JSON.parse(jsonData);


var server = http.createServer(function (req, res) {
    // res.writeHead(200, {'Content-Type': 'text/html'});

    if (req.url === "/") {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("<p>Nothing to see here</p>", "utf-8")
    } else if (req.url === "/frontpage") {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(fs.readFileSync("./html/frontpage.html", "utf-8"))
    } else if (req.url === "/contact") {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(fs.readFileSync("./html/contact.html", "utf-8"))
    } else if (req.url === "/plaintext") {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write(fs.readFileSync("./html/data/plaintext.txt", "utf-8"))
    } else if (req.url === "/json") {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(jsonData)
    } else if (req.url === "/table"){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("<table border='3'>")     
        res.write("<tr>")
        res.write("<th>Name</th><th>Age</th><th>Company</th><th>Address</th>")
        res.write("</tr>")

        for (person of jsonContents){
            res.write("<tr>")
            res.write(`<td>${person.name}</td>`)
            res.write(`<td>${person.age}</td>`)
            res.write(`<td>${person.company}</td>`)
            res.write(`<td>${person.address}</td>`)
            res.write("</tr>")
        }
        res.write("</table>")     
    } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("<h3>You seem to be lost</h3>")
    }
        
    res.end();
});


for (person of jsonContents){
    console.log(person.name + "\n" + person.age + "\n" + person.company + "\n" + person.address);
}


var port = process.env.PORT || 3000;

server.listen(port);

console.log('Server is running at http://localhost:%d', port);