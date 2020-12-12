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

module.exports = {
  module:{
    rules:[
      babelRule,
      cssRule
    ]
  },
  plugins:[
    new HTMLWebpackPlugin({teplate:'./src/index.html'})
  ],
  devtool: 'source-map',
  watch:true,
  devServer:{
    open:true
  }
}