var express = require('express');
var app = express();


// ROUTING
app.get('/', (req, res) => {
    res.send('<h3>Hello World</h3>');
})


// REDIRECTING
app.get('/home', (req, res) => {
    res.redirect(301, '/');
})


// DEPLOY THE APPLICATION
app.listen(8000, () => {
    console.log('Listening on port 8000')
});