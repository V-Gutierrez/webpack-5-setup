const path = require('path')

/*

sass-loader – for SCSS and CSS compile
node-sass – for node sass
postcss-loader - Process CSS with PostCSS
css-loader – resolve CSS imports
style-loader – inject CSS into the Dom

*/

module.exports = {
  mode: 'production',
  entry: {
    main: path.resolve(__dirname, './src/index.js')
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js'
  }
}
