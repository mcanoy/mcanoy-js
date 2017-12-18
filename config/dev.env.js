var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_URL: '"https://api.mcanoy.com"',
  MAP_KEY: '"AIzaSyBS0BW3vw0RfQ3sozyQFG2lMooCjb0uXfs"',
  GOOGLE_ANALYTICS: '"UA-2669425-1"'
})
