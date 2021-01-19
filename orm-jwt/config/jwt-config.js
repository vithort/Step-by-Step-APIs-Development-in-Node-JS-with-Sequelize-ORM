module.exports = {
  secret: 'onlinewebtutorkey',
  expiresIn: 120, // 2 minutes
  notBefore: 2, // for 2 secs, by default notBefore/expiresIn in seconds
  audience: 'size-users',
  issuer: 'online web tutor',
  algorithm: 'HS256',
};
