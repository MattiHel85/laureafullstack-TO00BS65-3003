var axios = require("axios");

const promise = axios
    .get("http://www.omdbapi.com/?s=star+wars&apikey=a1a170f0")
    .then(response => {
        const data = response.data;
        console.log(data);
    
    
});

console.log(promise);