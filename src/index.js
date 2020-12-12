import '@babel/polyfill'
import ReactDom from 'react-dom'
import React from 'react'
import App from './componets/App'

ReactDom.render(
  <App/>,
  document.querySelector('#root')
)