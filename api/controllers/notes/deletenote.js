module.exports = {


  friendlyName: 'Deletenote',


  description: 'Delete a note.',


  inputs: {

  },


  exits: {
    success:{
      description: 'Note Deleted Successfully'
    }
  },


  fn: async function () {
    var id = parseInt(this.req.params.id,10);
    var note = await Notes.destroyOne({ id:id});
    // return;

  }


};
