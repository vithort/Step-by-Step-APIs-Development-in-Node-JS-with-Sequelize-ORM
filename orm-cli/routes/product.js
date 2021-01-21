const express = require('express');
const productModel = require('../models').Product;

const router = express.Router();

router.get('/products', (req, res) => {
  productModel
    .findAll({
      attributes: ['id', 'name'],
      limit: 10, // total count of products we want at request
      offset: 4, // we are setting our first index value
      // order: [['id', 'DESC']],
      order: [['name', 'ASC']],
      where: {},
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
