const path = require('path')
module.exports = {
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
