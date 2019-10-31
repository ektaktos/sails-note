module.exports = {


  friendlyName: 'Allnotes',


  description: 'Get All notes for a user.',


  inputs: {

  },


  exits: {

  },


  fn: async function () {
    var user = this.req.decoded.data;
    var notes = await Notes.find({owner: user});

    return{
      data: notes
    };

  }
};
