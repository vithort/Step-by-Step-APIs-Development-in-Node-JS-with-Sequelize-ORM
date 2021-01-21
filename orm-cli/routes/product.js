const express = require('express');
const productModel = require('../models').Product;
const Sequelize = require('sequelize');

const Op = Sequelize.Op;

const router = express.Router();

router.get('/products', (req, res) => {
  productModel
    .findAll({
      attributes: ['id', 'name'],
      // limit: 10, // total count of products we want at request
      // offset: 4, // we are setting our first index value
      // order: [['id', 'DESC']],
      // order: [['name', 'ASC']],
      where: {
        // id: 212
        /*
        id: {
          // [Op.eq]: 200,
          [Op.between]: [200, 205]
        },
        */
        /*
        name: {
          [Op.like]: '%Salad%',
          [Op.like]: 'F%'
        },
        */
        /*
        id: {
          [Op.gt]: 210,
        },
        */
        /*
        id: {
          [Op.gte]: 200,
          [Op.lt]: 203
        }
        */
        /*
        id: {
          [Op.or]: {
            [Op.lt]: 120,
            [Op.gt]: 203,
          },
        },
        */
        [Op.or]: {
          id: { [Op.eq]: 120 },
          name: { [Op.eq]: 'Incredible Concrete Soap' },
        },
      },
    })
    .then((data) => {
      if (data) {
        // we have data
        res.status(200).json({
          status: 1,
          message: 'Products found',
          data: data,
        });
      } else {
        // we don't have data
        res.status(200).json({
          status: 0,
          message: 'no Products found',
        });
      }
    });
});

module.exports = router;
