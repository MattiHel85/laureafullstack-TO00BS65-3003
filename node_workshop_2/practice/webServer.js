const http = require('http');
const fs = require('fs');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});

    // Setting JS Variables

    // var heading1 = "<h1>Heading</h1>"
    // var newHeading2 = "<h2>Heading 1, no formatting";
    // var newParagraph = "Cool cool cool.";

    // res.write(heading1 + newHeading2 + newParagraph);

    // ******************************* //

    // Serving files

    // fs.readFile("example.txt", function(err, data) {
    //     res.writeHead(200, {'Content-Type': "text/html"});
    //     res.write(data);
    //     res.end();

    // })

    // ******************************* //

    // Creating routes

    console.log(req.url);

    if (req.url === "/page1") {
        res.write("<h1>PAGE ONE</h1>");
    } else if ( req.url === "/page2") {
        res.write("<h2>PAGE TWO</h2>")
    } else {
        res.write("<h1>DEFAULT</h1>")
    }

    res.end();
}).listen(8081);

console.log('Server is running at http://127.0.0.1:8081/');