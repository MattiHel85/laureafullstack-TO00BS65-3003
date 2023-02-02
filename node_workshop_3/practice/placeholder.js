const http = require("http");

let options = {
    host: "www.bbc.com",
    path: "/news"
}

let request = http.request(options, function (res) {
    let data = "";

    res.on('data', function(chunk) {
        data +=chunk;
    });
    res.on('end', function(){
        console.log(data);
    });
});

request.on('error', function(e){
    console.log(e.message);
});

request.end();