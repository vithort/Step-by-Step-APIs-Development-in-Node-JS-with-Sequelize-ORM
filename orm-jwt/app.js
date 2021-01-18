const express = require('express');
const Sequelize = require('sequelize');
const bodyParser = require('body-parser');
const JWT = require('jsonwebtoken');

const app = express();

const PORT = 8091;

app.use(bodyParser.json());

const sequelize = new Sequelize('orm_jwt', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});

sequelize
  .authenticate()
  .then((data) => {
    console.log('Database is successfully connected!');
  })
  .catch((error) => {
    console.log(error);
  });

// define model here
var User = sequelize.define(
  'tbl_users',
  {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING(150),
      allowNull: false,
    },
    status: {
      type: Sequelize.INTEGER,
      defaultValue: 1,
    },
  },
  {
    timestamps: false,
    modelName: 'User',
  }
);

User.sync(); // sync this model to database

// defines default route of welcome page
app.get('/', (req, res) => {
  res.status(200).json({
    status: 1,
    message: 'Welcome to Home Page',
  });
});

app.listen(PORT, () => {
  console.log('Application is running!');
});
