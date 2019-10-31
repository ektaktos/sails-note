module.exports = {


  friendlyName: 'Add',


  description: 'Add notes.',


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
    success: {
      description: 'New note was created successfully.'
    },
  },


  fn: async function (inputs) {
    inputs.owner = this.req.decoded.data;
    var note = await Notes.create(inputs).fetch();
    return note;

  }


};
