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

getHomepage: function(req, res) {

        // get top categories
		var categoryRepository = RequireService.frontRepository('category');

		categoryRepository.getTopCategories(function(topCategories) {
			return res.view('homepage', {
				locals : {
					topCategories 		: topCategories
				}
			});

		});
	}
};
