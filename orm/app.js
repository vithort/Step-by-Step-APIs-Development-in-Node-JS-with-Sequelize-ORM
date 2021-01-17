const express = require('express');

const Sequelize = require('sequelize');

const app = express();

const PORT = 8087;

// connection with mysql database
const sequelize = new Sequelize('node_orm', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});

// check database connection
sequelize
  .authenticate()
  .then(function (success) {
    console.log('Seccessfully connect with the database!');
  })
  .catch(function (error) {
    console.log('Error while connect with the database!');
    console.log(error);
  });

app.get('/', function (req, res) {
  res.status(200).json({
    status: 1,
    message: 'Welcome to Home Page!',
  });
});

app.listen(PORT, function () {
  console.log('Application is running!');
});
