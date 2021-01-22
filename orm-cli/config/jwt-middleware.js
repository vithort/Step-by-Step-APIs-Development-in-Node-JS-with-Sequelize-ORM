const JWT = require('jsonwebtoken');
const jwtConfig = require('./jwt-config');

let validateToken = (req, res, next) => {
  let tokenValue = req.headers['authorization'];
  if (tokenValue) {
    // we have token value
    JWT.verify(tokenValue, jwtConfig.secret, (error, data) => {
      if (error) {
        return res.status(500).json({
          status: 0,
          message: 'Invalid token found!',
        });
      } else {
        /*
        return res.status(200).json({
          status: 1,
          message: 'Valid token found!',
          data: data,
        });
        */
        req.data = data;
        next();
      }
    });
  } else {
    // we have no token passed inside header
    return res.status(404).json({
      status: 0,
      message: 'Token needed!',
    });
  }
};

module.exports = {
  checkToken: validateToken,
};
