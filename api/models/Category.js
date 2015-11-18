/**
* Category.js
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

        url: {
            model:    'url',
            required: true
        },

        products: {
            collection: 'product',
            via:        'categories',
            dominant:   false
        },

        categories: {
            collection:   'category',
            via:          'parentCategory'
        },

        parentCategory: {
            model:   'category'
        },

        isTopCategory: {
            type:       'boolean',
            required:   true
        }

  }
};
