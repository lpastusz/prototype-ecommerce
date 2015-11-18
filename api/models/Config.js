/**
* Config.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    attributes: {
        name: {
            type:     'string',
            required: true,
            size:   255
        },

        value: {
            required: true
        },

        type: {
            type:       'string',
            enum:       ['number', 'text'],
            required:   true
        }

  }
};
