module.exports = {
  secret: 'onlinewebtutorkey',
  expiresIn: 600000, // this will be in ms, here 10 mins is the limit
  notBefore: 60000, // after 1 min we are able to use this token value
  audience: 'size-users',
  issuer: 'online web tutor',
  algorithm: 'HS256',
};
