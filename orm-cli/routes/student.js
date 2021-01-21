const express = require('express');
const studentModel = require('../models').Student;
const bcrypt = require('bcrypt');
const Sequelize = require('sequelize');

const Op = Sequelize.Op;

const router = express.Router();

// create student api
router.post('/student', (req, res) => {
  studentModel
    .findOne({
      where: {
        email: {
          [Op.eq]: req.body.email,
        },
      },
    })
    .then((user) => {
      if (user) {
        // we have user available
        res.status(500).json({
          status: 0,
          message: 'Student already exists with this email address!',
        });
      } else {
        // create new user
        studentModel
          .create({
            name: req.body.name,
            email: req.body.email,
            roll_no: req.body.roll_no,
            password: bcrypt.hashSync(req.body.password, 10),
          })
          .then((user) => {
            res.status(200).json({
              status: 1,
              message: 'Student created successfully!',
            });
          });
      }
    });
});

module.exports = router;