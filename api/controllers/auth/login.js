var bcrypt = require('bcrypt');
module.exports = {


  friendlyName: 'Login',


  description: 'Login auth.',


  inputs: {
    email:{
      type: 'string',
      isEmail: true,
      required: true,
      description: 'Email of the user'
    },
    password:{
      type: 'string',
      required: true,
      description: 'Password of the user'
    }
  },


  exits: {
    success:{
      description: 'User logged in successfully'
    },
    badCombo: {
      description: `The provided email and password combination does not
      match any user in the database.`,
      responseType: 'unauthorized'
    }


  },


  fn: async function (inputs) {
    var user = await User.findOne({ email:inputs.email });
    if(!user){
      throw 'badCombo';
    }

    var compare = await bcrypt.compare(inputs.password, user.password)
    if (!compare) {
      throw 'badCombo';
    }
    return{
      status: 'success',
      message: 'Log in Successful',
      data: user,
      token: await sails.helpers.signjwt(user.id)
    };

  }


};
