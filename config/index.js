module.exports = {
  mongodbUri: 'mongodb://localhost/getme',
  env: process.env.NODE_ENV || 'development',
  isDev: this.env === 'development',
  port: '3000',
  hostname: 'htpp://localhost:8000'
}
