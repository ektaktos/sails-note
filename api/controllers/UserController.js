/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  create(req, res) {
    var data = req.body;

    User.create({
      email: data.email,
      password: data.password,
      fullname: data.fullname
      //etc...
    })
    .then((user) => {
    //   res.send({ token: jwToken.issue({ id: user.id }) }); // payload is { id: user.id}
      res.send('Hello there');
    })
    .catch((err) => {
      sails.log.error(err);
      return res.serverError('Something went wrong');
    });
  },

};

