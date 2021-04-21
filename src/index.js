import './index.css'
import 'antd/dist/antd.css'

import Amplify from 'aws-amplify'
import App from './App'
import React from 'react'
import ReactDOM from 'react-dom'
import config from './aws-exports'
import reportWebVitals from './reportWebVitals'

Amplify.configure(config)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
