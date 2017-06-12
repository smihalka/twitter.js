const express = require( 'express' );
const app = express(); // creates an instance of an express application


app.get('/', function(req, res) {     res.send('this is a sample!'); });
app.listen(3000) 
