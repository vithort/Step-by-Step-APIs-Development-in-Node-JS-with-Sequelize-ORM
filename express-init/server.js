const express = require('express');

const app = express();

const PORT = 8087;

// GET
app.get('/', function (req, res) {
  res.send({
    status: 1,
    message: 'This is GET METHOD!',
  });
});

// POST
app.post('/', function (req, res) {
  res.send({
    status: 1,
    message: 'This is POST METHOD!',
  });
});

// DELETE
app.delete('/', function (req, res) {
  res.send({
    status: 1,
    message: 'This is DELETE METHOD!',
  });
});

// PUT
app.put('/', function (req, res) {
  res.send({
    status: 1,
    message: 'This is PUT METHOD!',
  });
});

app.listen(PORT, function () {
  console.log('Application is running!');
});
