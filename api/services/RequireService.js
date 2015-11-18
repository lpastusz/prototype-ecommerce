
module.exports = {

    frontRepository: function(modulName) {
        return require('../repositories/' + StringUtilService.capitalizeFirstLetter(modulName) + 'FrontRepository.js'); 
    }

}
