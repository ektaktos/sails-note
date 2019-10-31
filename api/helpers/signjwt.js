var jwt = require('jsonwebtoken');
var secret = 'authenticationwithjsonwebtoken';
module.exports= {


  friendlyName: 'Sign Jwt',


  description: 'Sign a Json web token something.',


  inputs: {
    payload: {
      description: 'Data to be used in genrating the json web token',
      type: 'string',
      required: true
    }
  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function (inputs) {
    return jwt.sign({
      data: inputs.payload
    }, secret,{expiresIn: '1 day'});
  }


};

