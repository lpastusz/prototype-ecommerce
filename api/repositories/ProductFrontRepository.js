
module.exports = {

    getProductsForCategory: function(categoryId, callback) {

    },

    getProduct: function(productId, callback) {

        Product.findOne(productId).exec(function(err, resultProduct) {
            if (err) { callback(null); }
            callback(resultProduct);
        });

    },

    getProductsByQuery: function(queryString, callback) {
        Product.find({
            name: { 'contains': queryString }
        }).populate('url').exec(function(err, resultProducts) {
            if (err || !resultProducts) callback();
            callback(resultProducts);
        });
    }

}
