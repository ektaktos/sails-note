var jwt = require('jsonwebtoken');
var secret = 'authenticationwithjsonwebtoken';

module.exports = async function(req,res,next){
  var token;
  if (req.headers && req.headers.authorization) {
    token = req.headers.authorization.split(' ')[1];
    if (!token) {
      return res.status(401).send({err: 'Format is Authorization: Bearer [token]'});
    }else{
      jwt.verify(token,secret, (err,decoded) =>{
        if (err) return res.status(401).send({err: 'Invalid Token'});
        req.decoded = decoded;
        next();
      });
    }
  }else{
    return res.status(401).send({err: 'No Authorization header was found'});
  }
};
