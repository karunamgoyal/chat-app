var express = require('express');

// app setup 

var app = express();

var server = app.listen(4000,function(){
    console.log('Listening to Port 4000');
});

app.use(express.static('public'));



