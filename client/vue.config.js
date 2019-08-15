const path = require('path')
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? 'http://127.0.0.1:7001/static' : '/',
  configureWebpack: {

  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'stylus',
      patterns: [
        path.resolve(__dirname, './src/assets/styles/color.styl')
      ]
    }
  }
}
