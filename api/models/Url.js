/**
* Url.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    attributes: {
        type: {
            type:       'string',
            enum:       ['product', 'category'],
            required:   true
        },

        value: {
            type:       'string',
            required:   true,
            size:     255
        },

        productTarget: {
            model:      'product'
        },

        categoryTarget: {
            model:      'category'
        }

  }
};
