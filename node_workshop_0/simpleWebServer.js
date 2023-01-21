var http = require('http');

var text = '<h1>This is some text</h1>\n'

var testTable = '<table><tr><th>Name</th><th>Address</th><th>City</th></tr><tr><td>Matti Meikäläinen</td><td>Timotie 1, as 10</td><td>Tampere</td></tr><tr><td>Maija Virtanen</td><td>Asematie 12</td><td>Kiljava</td></tr></table>\n'

// This is the for loop requested - Not a part of this server

// for(i=1; i <= 100; i++){ 
//     console.log(i); 
// }

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'}); 
    // The above content type was previously 'text/plain' and HTML tags didn't work in the text variable, now it works because the content type has been changed

    res.write(text); // This code has to be between the writeHead and end functions. Why? Because 'writeHead' opens the file type and 'end' ends the request.
    res.write(testTable);

    res.end('Hello World!\n');
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');