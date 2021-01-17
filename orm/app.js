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

// create model => First way to create models in sequelize
var User = sequelize.define(
  'tbl_users',
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
    },
    rollNo: {
      type: Sequelize.INTEGER,
    },
    status: {
      type: Sequelize.ENUM('1', '0'),
      defaultValue: '1',
    },
    created_at: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    updated_at: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
  },
  {
    modelName: 'User',
    timestamps: false,
  }
);

// sync model
sequelize.sync();

// default welcome page route
app.get('/', function (req, res) {
  res.status(200).json({
    status: 1,
    message: 'Welcome to Home Page!',
  });
});

// listed request here
app.listen(PORT, function () {
  console.log('Application is running!');
});
