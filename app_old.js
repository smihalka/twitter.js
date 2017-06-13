const express = require( 'express' );
const chalk = require( 'chalk' );
const app = express(); // creates an instance of an express application

//app.use(function (req, res, next) {
//  console.log('Time:', Date.now()) ;
    // do your logging here
    // call `next`, or else your app will be a black hole — receiving requests but never properly responding
//    next();
//})

app.get('/', function(req, res) { 
  res.send('this is a sample!'); 
});
app.get('/is-anybody-in-there', function(req, res) { 
  res.send('this is someone else'); 
});
// app.get('/modernism', function (req, res) {
//   res.send('this is the get')
// })
//app.post('/modernism', function (req, res) {
//  res.send('POST request to the homepage')
//})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
