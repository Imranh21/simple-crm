import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import ContextCRM from './context/ContextCRM'

ReactDOM.render(
  <React.StrictMode>
    <ContextCRM>
      <App />
    </ContextCRM>
  </React.StrictMode>,
  document.getElementById('root')
)
