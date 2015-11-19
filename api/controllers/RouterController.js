/**
 * RouterController
 *
 * @description :: Controller to process requests
 */

module.exports = {
	/**
	@description :: All requests except assets are forwarded to this function
					Request is processed using DB and forwarded to right controller
	*/
	handleRequest: function(req, res) {

		// get URL
		var url = req.path;

		// skip slash
		url = url.substring(1);


		// find URL
		Url.findOne({
			value: url
		}).exec(function(err, resultUrl) {
			if (err) { return res.view('500'); }

			if (!resultUrl) { return res.view('404'); }

			// decide where to forward request
			switch (resultUrl.type)
			{
				case 'product':
					var productController = require('./ProductController.js');
					return productController.getProductDefaultPage(req, res, resultUrl.productTarget);
					break;
				case 'category':
					var categoryController = require('./CategoryController.js');
					return categoryController.getCategoryDefaultPage(req, res, resultUrl.categoryTarget);
					break;
				default:
					return res.view('404');
					break;
			}

		});

	}
};
