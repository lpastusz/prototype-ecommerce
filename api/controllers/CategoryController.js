/**
 * CategoryController
 *
 * @description :: Server-side logic for managing categories
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getCategoryDefaultPage: function(req, res, categoryId) {


		// get top categories
		var categoryRepository = RequireService.frontRepository('category');
		var productRepository = RequireService.frontRepository('product');


		categoryRepository.getTopCategories(function(topCategories) {

			categoryRepository.getCategoryWithProducts(categoryId, function(category, products) {
				if (category == null) { return res.view('404'); }

				console.log(products);

				return res.view('ProductListPage', {
					locals : {
						topCategories 		: topCategories,
						currentCategory 	: category,
						products 			: products
					}
				});

			});


				// show view with data

		});


/*
		DumpService.assignProductToCategory("Green lens", "Healthy food", function() {
			res.ok();
		});
*/
	}
};
