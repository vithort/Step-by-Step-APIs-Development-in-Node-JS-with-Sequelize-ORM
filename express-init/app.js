const express = require('express');

const app = express();

const PORT = 8087;

// GET, POST, DELETE, PUT

// about us page
app.get('/about-us', function (req, res) {
  res.send({
    status: 1,
    message: 'Welcome to About Us Page',
  });
});

// contact us page
app.get('/contact-us', function (req, res) {
  res.send({
    status: 1,
    message: 'Welcome to Contact Us Page',
  });
});

// services page
app.get('/services', function (req, res) {
  res.send({
    status: 1,
    message: 'Welcome to Services Page',
  });
});

// welcome page
app.get('/', function (req, res) {
  res.send({
    status: 1,
    message: 'Simple GET Method',
  });
});

app.listen(PORT, function () {
  console.log('App is Running!');
});
