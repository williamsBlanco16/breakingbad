const HTMLWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const babelRule = {
  test: /\.js$/,
  exclude: path.resolve(__dirname,'node_module'),
  use:{
    loader: 'babel-loader',
    options:{
      presets:[
        '@babel/preset-env',
        '@babel/preset-react'
      ]
    }
  }
}

const cssRule = {
  test: /\.css$/i,
  use:['css-loader', 'style-loader']
}

const urlLoaderRule = {
  test: /.(png|jpe?g|gif|svg)$/i,
  use: {
    loader: 'file-loader',
    options:{
      limit: 8192
    }
  } 
}
module.exports = {
  entry:[
    './src/index.js',
    '@babel/polyfill'
  ],
  module:{
    rules:[
      babelRule,
      cssRule,
      urlLoaderRule,
    ]
  },
  plugins:[
    new HTMLWebpackPlugin({template:'./src/index.html'})
  ],
  devtool: 'source-map',
  watch:true,
  devServer:{
    open:true
  }
}