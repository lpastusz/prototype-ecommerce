
module.exports = {

    getConfig: function(configName) {

        Config.findOne({name: configName}).exec(function(err, resultConfig) {
            if (err || !resultConfig)
            {
                throw "Unknown config item" + configName;
            }

            return resultConfig.value;
        });

    }

}
