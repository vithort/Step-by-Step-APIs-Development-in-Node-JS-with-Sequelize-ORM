const express = require('express');
const productModel = require('../models').Product;

const router = express.Router();

router.get('/products', (req, res) => {
  productModel.findAll().then((data) => {
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
