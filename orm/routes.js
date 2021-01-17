const express = require('express');
const Sequelize = require('sequelize');

const router = express.Router();

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

router.post('/user', function (req, res) {
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

// bulk create method
router.post('/bulk-user', function (req, res) {
  User.bulkCreate([
    {
      name: 'user',
      email: 'user@gemail.com',
      rollNo: 51,
      status: 1,
    },
    {
      name: 'user2',
      email: 'user2@gemail.com',
      rollNo: 52,
      status: 1,
    },
    {
      name: 'user3',
      email: 'user3@gemail.com',
      rollNo: 53,
      status: 1,
    },
    {
      name: 'user4',
      email: 'user4@gemail.com',
      rollNo: 54,
      status: 1,
    },
  ])
    .then(function (response) {
      res.status(200).json({
        status: 1,
        message: 'User has been created!',
      });
    })
    .catch(function (error) {
      console.log(error);
    });
});

// get all users
router.get('/users', function (req, res) {
  User.findAll({
    /*
    where: {
      status: '0',
    },
    */
  })
    .then((users) => {
      res.status(200).json({
        status: 1,
        message: 'Users found!',
        data: users,
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

// delete api method
router.delete('/user/:id', function (req, res) {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((data) => {
      res.status(200).json({
        status: 1,
        message: 'User has been deleted successfully!',
      });
    })
    .catch((error) => {
      res.status(500).json({
        status: 0,
        message: 'Failed to delete user!',
        data: error,
      });
    });
});

// update api method
router.put('/user', function (req, res) {
  User.update(
    {
      name: req.body.name,
      email: req.body.email,
      rollNo: req.body.rollNo,
    },
    {
      where: {
        id: req.body.id,
      },
    }
  )
    .then((response) => {
      res.status(200).json({
        status: 1,
        message: 'User has been updated successfully!',
      });
    })
    .catch((error) => {
      res.status(500).json({
        status: 0,
        message: 'Failed to update user!',
        data: error,
      });
    });
});

// default welcome page route
router.get('/', function (req, res) {
  res.status(200).json({
    status: 1,
    message: 'Welcome to Home Page!',
  });
});

module.exports = router;
