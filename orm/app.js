const express = require('express');
const bodyParser = require('body-parser');
const appRoutes = require('./routes');

const app = express();

app.use(bodyParser.json());

const PORT = 8087;

app.use('/', appRoutes);

// listed request here
app.listen(PORT, function () {
  console.log('Application is running!');
});
