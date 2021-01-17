const express = require('express');

const bodyParser = require('body-parser');

const Sequelize = require('sequelize');

const app = express();

app.use(bodyParser.json());

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

// create some data to table

app.post('/user', function (req, res) {
  /*
  User.create({
    name: 'Vithor Carvalho',
    email: 'vithort@gmail.com',
    rollNo: 21,
    status: 1,
  })
    .then(function (response) {
      res.status(200).json({
        status: 1,
        messsage: 'User has been created successfully!',
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  */

  // console.log(re.body);
  
  User.create(req.body)
    .then(function (response) {
      res.status(200).json({
        status: 1,
        message: 'User has been created successfully!',
      });
    })
    .catch(function (error) {
      console.log(error);
    });
});

// create models using second way
/*
const Model = Sequelize.Model;

// USER Model
class User extends Model {}
User.init(
  {
    // parameters
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
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
  },
  { timestamps: false, modelName: 'tbl_users', sequelize }
);

// BOOK Model
class Book extends Model {}
Book.init(
  {
    // parameters
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    amount: {
      type: Sequelize.INTEGER,
    },
    status: {
      type: Sequelize.ENUM('1', '0'),
      defaultValue: '1',
    },
  },
  { timestamps: false, modelName: 'tbl_books', sequelize }
);

// User.sync()
// Book.sync()

// sequelize.sync();
*/

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
