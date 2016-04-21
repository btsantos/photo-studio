var config = {}

config.mongodbUri = 'mongodb://localhost/getme'
config.env = process.env.NODE_ENV || 'development'
config.isDev = config.env === 'development'
config.port = '5000'
config.hostname = 'htpps://api.getme.io'

module.exports = config
