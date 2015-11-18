/**
 * ProductController
 *
 * @description :: Server-side logic for managing products
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getProductDefaultPage: function(req, res, productId) {

		// get repositories
		var productRepository = RequireService.frontRepository('product');
		var categoryRepository = RequireService.frontRepository('category');


		// get product detail
		productRepository.getProduct(productId, function(product) {
			if (product == null) { return res.view('404'); }

			// get top categories
			categoryRepository.getTopCategories(function(topCategories) {

				// show view with data
				return res.view('ProductDetailPage', {
					locals : {
						product 		: product,
						topCategories 	: topCategories
					}
				});
			});

		});







/*
		DumpService.bindTwoCategories("Meat", "Pork meat", function() {
			res.ok();
		});
*/
	}
};
