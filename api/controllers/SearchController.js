/**
 * SearchController
 *
 * @description :: Server-side logic for managing products
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    getProductsByQuery: function(req, res) {

        var productRepository = RequireService.frontRepository('product');

        var query = req.param('query');

		productRepository.getProductsByQuery(query, function(products) {
			if (!products.length) {
                return res.json({
                    message: {
                        type: 'info',
                        text: 'We are sorry, but no products were found. Try to look for something else.'
                    }
                });

            }

            else
            {
                return res.json({
                    products: products
                });

            }



        });

    }
}
