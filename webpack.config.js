const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HTMLWepbackPlugin = require('html-webpack-plugin')


module.exports = (env, argv) => {

  const isDevServer = env.WEBPACK_SERVE
  const mode = argv.mode || (isDevServer ? 'development' : 'production')
  const isDev = mode !== 'production'

  const config = {
    mode,
    entry: ['@babel/polyfill', './src/index.tsx'],
    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: isDevServer ? '/' : 'auto',
      filename: '[name].[hash].js',
    },
    devServer: {
      port: 4300,
      historyApiFallback: true
    },
    plugins: [
      new HTMLWepbackPlugin({ 
        template: './public/index.html',
        minify: isDev
          ? false
          : {
              removeComments: true,
              collapseWhitespace: true,
              removeAttributeQuotes: true,
              collapseBooleanAttributes: true,
              removeScriptTypeAttributes: true,
            },
      }),
      new CleanWebpackPlugin(),
    ],
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
      }
    },
    module: {
      rules: [
        {
          test: /\.(css|scss)$/,
          use: [
            'style-loader',
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                // additionalData: '@import "vars";',
                sassOptions: {
                  includePaths: [path.resolve(__dirname, "src/styles")],
                }
              }
            } 
          ],
        },
        {
          test: /\.(jpg|jpeg|png|svg|gif|mp4)$/,
          use: [{
            loader: 'file-loader'
          }]
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'ts-loader'
          }
        },
      ]
    }
  }

  return config
}