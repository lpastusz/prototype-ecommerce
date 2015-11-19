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

			categoryRepository.getCategoryWithSubcategoriesAndProducts(categoryId, function(category, subcategories, products) {
				if (category == null) { return res.view('404'); }


				return res.view('ProductListPage', {
					locals : {
						category 			: category,
						subcategories       : subcategories,
						products 			: products
					}
				});

			});

		});
	}
};
