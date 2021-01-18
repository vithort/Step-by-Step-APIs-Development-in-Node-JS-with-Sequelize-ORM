const express = require('express');
const Sequelize = require('sequelize');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
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

// register user api
app.post('/user', (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  let password = bcrypt.hashSync(req.body.password, 10); //hash value
  let status = req.body.status;

  User.findOne({ where: { email: email } })
    .then((user) => {
      // user should be empty if we have user with the email
      if (user) {
        res.status(200).json({
          status: 0,
          message: 'User already exists!',
        });
      } else {
        User.create({
          name: name,
          email: email,
          password: password,
          status: status,
        })
          .then((response) => {
            res.status(200).json({
              status: 1,
              message: 'User has been registered successfully!',
            });
          })
          .catch((error) => {
            res.status(500).json({
              status: 0,
              data: error,
            });
          });
      }
    })
    .catch((error) => {
      console.log(error);
    });
});

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
