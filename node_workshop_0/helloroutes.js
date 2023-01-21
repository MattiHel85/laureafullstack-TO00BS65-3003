var http = require('http');


http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'}); 
    // The above content type was previously 'text/plain' and HTML tags didn't work in the text variable, now it works because the content type has been changed

    if (req.url === '/helloworld') {
        res.write('<p>Hello World!</p>')
    } else if (req.url === '/homepage') {
        res.write('<h1>WELCOME HOME!</h1>')
    } else if (req.url === '/stillhere') {
        res.write('<h2>Still here?</h2>')
    } else if (req.url === '/gohome') {
        res.write('<h1>GO HOME!</h1>')
    } else if (req.url === '/dontgohome') {
        res.write('<h1>DO NOT GO HOME!</h1>')
    }

    res.end();
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');