var express = require('express');
var path = require('path');
var app = express();
var port = 3000;

// set public directory to serve static files 
app.use('/', express.static(path.join(__dirname, 'public')));



// redirect to store 
app.get('/', (req, res) => {
    res.redirect('/index.html');
})

app.get('/error', (req, res) => {
    res.redirect('/error.html');
})

app.listen(process.env.PORT || port)