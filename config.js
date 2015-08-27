var config = {};

config.production = process.env.NODE_ENV === 'production';

config.databases = {};

config.databases.mongo = {};

// superbowl-dev-mongolabs
config.databases.mongo.primary = "mongodb://superbowl:Passw0rd1234@ds031883.mongolab.com:31883/superbowl-dev"

if(!config.production) {
    config.databases.mongo.primary = "mongodb://localhost:27017/superbowl";
}

module.exports = config;