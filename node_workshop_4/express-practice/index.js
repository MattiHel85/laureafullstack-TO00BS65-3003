const express = require('express');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

// Serve static files from public directory
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
})


app.get('/rawjsondata', (req, res) => {
    let data = require('./public/sampledata.json');
    
    res.json(data);
})

app.get('/jsontable', (req, res) => {
    let data = require('./public/sampledata.json');

    let results ='<table border="1"> ';

    for (person of data) {
        results +=
        '<tr>' +
        '<td>'+person.name+'</<td>' +
        '<td>'+person.address+'</<td>' +
        '<td>'+person.email+'</<td>' +
        '</tr>';
    }

    res.status(200).send(results);
})

app.get('/adduser', (req, res) => {
    res.sendFile(__dirname + '/public/form.html');
})

app.post('/adduser', (req, res) => {
    const users = require('./public/users.json');

    const date = new Date();
    users.push({
        "name":req.body.name,
        "company": req.body.company,
        "email": req.body.email,
        "date": date.toLocaleDateString()
    });

    let jsonStr = JSON.stringify(users);

    fs.writeFile('./public/users.json', jsonStr, (err) => {
        if (err) throw err;
        console.log("It's saved!")
    })

    res.redirect('/details');
    // console.log(data);
    // res.status(200).send(data);
})

app.get('/details', (req, res) => {
    const users = require('./public/users.json');

    let results = '<table border="1"> ';

    for (user of users) {
        results +=
        '<tr>'+
        '<td>'+user.name+'</td>'+
        '<td>'+user.email+'</td>'+
        '<td>'+user.company+'</td>'+
        '<td>'+user.date+'</td>'+
        '<tr>';
    }

    res.status(200).send(results);
})


app.get('*', (req, res) => {
    res.status(404).send("Oops, that page doesn't exist")
})

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
})