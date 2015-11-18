
module.exports = {

    getAllCategories: function(callback) {

        Category.find({}).populate('url').exec(function(err, resultCategories) {
            if (err) { callback(null); }
            callback(resultCategories);
        });

    },

    getTopCategories: function(callback) {

        Category.find({ isTopCategory: true }).populate('url').exec(function(err, resultCategories) {
            if (err) { callback(null); }
            callback(resultCategories);
        });

    },


    getCategoryWithProducts: function(categoryId, callback) {

        var productsPerPage = ConfigService.getConfig('productsPerPage');

        Category.findOne(categoryId).populate('url').populate('products', {
            skip: 0,
            limit: productsPerPage
        }).exec(function(err, resultCategory) {
            if (err) { callback(null, null); }

            var products = resultCategory.products;
            resultCategory.products = null;

            callback(resultCategory, products);
        });

    }

}
