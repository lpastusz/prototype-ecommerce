
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


    getCategoryWithSubcategoriesAndProducts: function(categoryId, callback) {

        var productsPerPage = ConfigService.getConfig('productsPerPage');

        Category.findOne(categoryId).populate('url').populate('categories').populate('products', {
            skip: 0,
            limit: productsPerPage
        }).exec(function(err, resultCategory) {
            if (err) { callback(null, null); }

            // waterline does not support populating of populated values
            // so this way I get ids of products and then get them again with URLs
            var productIds = [];
            resultCategory.products.forEach(function(product, index) {
                productIds.push({id : product.id});
            })

            // waterline does not support populating of populated values
            // so this way I get ids of categories and then get them again with URLs
            var subcategoryIds = [];
            resultCategory.categories.forEach(function(subcategory, index) {
                subcategoryIds.push({id : subcategory.id});
            })

            Category.find(subcategoryIds).populate('url').exec(function(err, resultSubcategories) {
                if (err) { callback(resultCategory, null, null); }

                Product.find(productIds).populate('url').exec(function(err, resultProducts) {
                    if (err) { callback(resultCategory, resultSubcategories, null); }

                    callback(resultCategory, resultSubcategories, resultProducts);

                });
            });


        });

    }

}
