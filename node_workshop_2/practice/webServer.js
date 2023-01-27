const http = require('http');

var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});

    if (req.url === "/page1") {
        res.write("<h1>PAGE ONE</h1>");
    } else if ( req.url === "/page2") {
        res.write("<h2>PAGE TWO</h2>")
    } else {
        res.write("<h1>DEFAULT</h1>")
    }

    res.end();
});

var port = process.env.PORT || 3000;

server.listen(port);

console.log('Server is running at http://localhost:%d', port);