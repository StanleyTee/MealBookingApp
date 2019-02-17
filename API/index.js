const express = require('express');

const app = express();

const PORT = 8080;

app.get('/', function(req,res){
    return res.send('The API is working');
});

app.listen(PORT, function(){
    console.log("Server is running on PORT" + PORT);
})