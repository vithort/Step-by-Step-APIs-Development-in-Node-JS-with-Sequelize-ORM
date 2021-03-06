const express = require('express');
const Sequelize = require('sequelize');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');
const JwtConfig = require('./config/jwt-config');
const JwtMiddleware = require('./config/jwt-middleware');

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

// user profile data
app.post('/profile', JwtMiddleware.checkToken, (req, res) => {
  res.status(200).json({
    status: 1,
    message: 'Token value parser!',
    userdata: req.user,
  });
});

// validate token api
app.post('/validate', (req, res) => {
  //console.log(req.headers);
  let userToken = req.headers['authorization'];
  if (userToken) {
    // we have token
    JWT.verify(userToken, JwtConfig.secret, (error, decoded) => {
      if (error) {
        //console.log(error);
        res.status(500).json({
          status: 0,
          message: 'Invalid token!',
          data: error,
        });
      } else {
        //console.log(decoded);
        res.status(200).json({
          status: 1,
          message: 'Token is valid!',
          data: decoded,
        });
      }
    });
  } else {
    // not getting token value
    res.status(500).json({
      status: 0,
      message: 'Please provide authentication token value!',
    });
  }
});

// login user api
app.post('/login', (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then((user) => {
      if (user) {
        // we have user data
        if (bcrypt.compareSync(req.body.password, user.password)) {
          let userToken = JWT.sign(
            {
              email: user.email,
              id: user.id,
            },
            JwtConfig.secret,
            {
              expiresIn: JwtConfig.expiresIn, // this will be in ms, here 10 mins is the limit
              notBefore: JwtConfig.notBefore, // after 1 min we are able to use this token value
              audience: JwtConfig.audience,
              issuer: JwtConfig.issuer,
              algorithm: JwtConfig.algorithm,
            }
          );
          // password match
          res.status(200).json({
            status: 1,
            message: 'User logged in successfully!',
            token: userToken,
          });
        } else {
          // password didin't match
          res.status(500).json({
            status: 0,
            message: 'Password didn`t match!',
          });
        }
      } else {
        // we don't have user data
        res.status(500).json({
          status: 0,
          message: 'User not exists with this email address!',
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
});

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
