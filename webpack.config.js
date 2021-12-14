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
    main: path.resolve(__dirname, './src/app/index.js')
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      /* CSS SCSS */
      {
        test: /\.(scss|css)$/i,
        use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader']
      },
      /* IMAGES */
      {
        test: /\.(?:ico|gif|png|jpe?g|svg)$/i,
        loader: 'file-loader',
        options: {
          name: '/assets/[name].[ext]'
        }
      }
    ]
  }
}
