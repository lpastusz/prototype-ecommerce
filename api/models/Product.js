/**
* Product.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    attributes: {
        name: {
            type:       'string',
            required:   true,
            size:     255
        },

        url: {
            model:    'url',
            required: true
        },

        description: {
            type:       'text',
        },

        inStock: {
            type:       'boolean',
            required:    true
        },

        categories: {
            collection: 'category',
            via: 'products',
            dominant: true
        },

        price: {
            type:       'float',
            required:   true
        },

        mainImage: {
            type: 'json',
            required: true
        }
  }
};
