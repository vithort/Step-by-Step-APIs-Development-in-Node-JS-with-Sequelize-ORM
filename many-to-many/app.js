const express = require('express');
const userModel = require('./models').User;
const roleModel = require('./models').Role;
const userRoleModel = require('./models').UserRole;

const app = express();
const PORT = 8087;

// get all roles and their respective users
app.get('/roles', (req, res) => {
  roleModel
    .findAll({
      include: {
        model: userModel,
        attributes: ['id', 'name'],
        through: {
          model: userRoleModel,
        },
      },
    })
    .then((data) => {
      res.status(200).json({
        status: 1,
        message: '',
        data: data,
      });
    });
});

// get all users and their respective roles
app.get('/users', (req, res) => {
  userModel
    .findAll({
      include: {
        model: roleModel,
        attributes: ['id', 'name'],
        through: {
          model: userRoleModel,
        },
      },
    })
    .then((data) => {
      res.status(200).json({
        status: 1,
        message: '',
        data: data,
      });
    });
});

app.get('/', (req, res) => {
  res.status(200).json({
    status: 1,
    message: 'Welcome to Home Page!',
  });
});

app.listen(PORT, () => {
  console.log('Application is running at ' + PORT);
});
