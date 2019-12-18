const express = require('express');
const app = express();

const path = require('path');

const port = 9012;

app.use('/', express.static(path.join(__dirname, '.')));

app.get('/', (req,res,next) => {
    res.sendfile('menu.html');
});

app.get('/flex/aligncontent', (req,res,next) => {
    res.sendfile('flex-align-content.html');
});

app.listen(port, () => {
    console.log('running on port ' + port);
});