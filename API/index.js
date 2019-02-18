const express = require('express');
import bodyParser from 'body-parser';

const app = express();

const PORT = 8080;

app.use(bodyParser.json());

app.get('/', function(req,res){
    return res.send('The API is working');
});

app.listen(PORT, function(){
    console.log("Server is running on PORT" + PORT);
})