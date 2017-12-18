var merge = require('webpack-merge')
var devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  GOOGLE_ANALYTICS: '"UA-2669425-1"'
})
