const messages = [];

const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;

const app = express();
    app.use(express.static('assets'))
    app.use(bodyParser.json())

app.listen(port, function(){
    console.log(`Listening on port: ${port}`);
});

app.get('/messages', function(req, res, next){
    console.log(req.body);
} )
