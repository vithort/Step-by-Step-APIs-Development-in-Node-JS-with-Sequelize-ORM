const JwtConfig = require('./jwt-config');
const JWT = require('jsonwebtoken');

let checkToken = (req, res, next) => {
  let userToken = req.headers['authorization'];

  if (userToken) {
    // token value
    JWT.verify(
      userToken,
      JwtConfig.secret,
      {
        algorithms: JwtConfig.algorithm,
      },
      (error, data) => {
        if (error) {
          return res.status(500).json({
            status: 0,
            message: 'Token is not valid!',
            data: error,
          });
        } else {
          req.user = data;
          next();
        }
      }
    );
  } else {
    res.status(500).json({
      status: 0,
      message: 'Please provide authentication token value!',
    });
  }
};

module.exports = { checkToken: checkToken };
