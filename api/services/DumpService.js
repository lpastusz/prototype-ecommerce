
module.exports = {

    bindTwoCategories: function(parentCategoryName, childCategoryName, callback) {

        Category.findOne({name: parentCategoryName}).populate('categories').exec(function(err, parentCategory) {
            Category.findOne({name: childCategoryName}).exec(function(err, childCategory) {
                if (parentCategory.categories)
                {
                    parentCategory.categories.add(childCategory.id);
                }
                else
                {
                    parentCategory.categories = new Array();
                    parentCategory.categories.add(childCategory.id);
                }


                childCategory.parentCategory = parentCategory.id;

                parentCategory.save(function(err, res1) {
                    Category.update(childCategory.id, childCategory).exec(function(err, res2) {
                        if (res1 && res2) callback();
                        else callback(err);
                    })
                })
            });
        });

    },


    assignProductToCategory: function(productName, categoryName, callback) {

        Product.findOne({name: productName}).populate('categories').exec(function(err, product) {
            Category.findOne({name: categoryName}).populate('products').exec(function(err, category) {

                product.categories.add(category.id);

                product.save(function(err, res) {
                    console.log(res);
                    if (res) callback();
                    else callback(err);
                });


            });
        });

    }

}
