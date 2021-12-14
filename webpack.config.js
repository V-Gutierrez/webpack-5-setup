const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

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
      },
      /* FONTS */
      {
        test: /\.(woff(2)?|ttf|eot|otf)$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
          mimetype: 'application/font-ttf',
          name: '/assets/fonts/[name].[ext]'
        }
      },
      /* Javascript */
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: `Webpack Setup`,
      template: './src/public/index.html',
      filename: 'index.html'
    })
  ]
}
