// Create web server with express
const express = require('express');
const app = express();

// Create web server with express
app.get('/', function(req, res) {
  res.send('Hello World');
});

// Add a new route
app.get('/comments', function(req, res) {
  res.send('This is a new route');
});

// Start the server
app.listen(3000, function() {
  console.log('Server is running on port 3000');
});