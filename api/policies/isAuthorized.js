var jwt = require('jsonwebtoken');
var secret = 'authenticationwithjsonwebtoken';

module.exports = async function(req,res,next){
  var token;
  if (req.headers && req.headers.authorization) {
    token = req.headers.authorization.split(' ')[1];
    if (!token) {
      return res.json(401,{err: 'Format is Authorization: Bearer [token]'});
    }else{
      jwt.verify(token,secret, (err,decoded) =>{
        if (err) return res.json(401,{err: 'Invalid Token'});
        req.decoded = decoded;
        next();
      });
    }
  }else{
    return res.json(401,{err: 'No Authorization header was found'});
  }
};
