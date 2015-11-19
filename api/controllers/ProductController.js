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

		// get product detail
		productRepository.getProduct(productId, function(product) {
			if (product == null) { return res.view('404'); }

				// show view with data
				return res.view('ProductDetailPage', {
					locals : {
						product 		: product
					}
				});
		});
	}
};
