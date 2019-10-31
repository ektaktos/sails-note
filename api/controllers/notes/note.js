module.exports = {


  friendlyName: 'Note',


  description: 'A single Note.',


  inputs: {

  },


  exits: {

  },


  fn: async function () {
    var id = this.req.params.id;
    var user = this.req.decoded.data;

    var note = await Notes.findOne({id:id, owner:user});
    // All done.
    return{
      data: note
    };

  }


};
