
module.exports = {

    getProductsForCategory: function(categoryId, callback) {

    },

    getProduct: function(productId, callback) {

        Product.findOne(productId).exec(function(err, resultProduct) {
            if (err) { callback(null); }
            callback(resultProduct);
        });

    }

}
