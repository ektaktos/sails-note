module.exports = {


  friendlyName: 'Updatenote',


  description: 'Update a note.',


  inputs: {
    title:{
      type: 'string',
      required: true,
      description: 'THe title of the note'
    },
    body:{
      type: 'string',
      required: true,
      description: 'the body of the note created'
    },
  },


  exits: {
    notFound: {
      responseType: 'notFound'
    },

    forbidden: {
      responseType: 'forbidden'
    },
  },


  fn: async function (inputs) {
    var id = parseInt(this.req.params.id,10);
    var owner = this.req.decoded.data;
    var note = await Notes.findOne({id:id});
    if (!note) {
      throw 'notFound';
    }

    if(owner !== note.owner){
      throw 'forbidden';
    }
    
    await Notes.update({id:id}).set(inputs);

  }


};
