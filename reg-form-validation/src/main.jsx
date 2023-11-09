import React from 'react'
import ReactDOM from 'react-dom/client'
import { RegForm } from './components/RegForm/RegForm.jsx'
import './index.css'
import { ReactHookForm } from './components/ReactHookForm/ReactHookForm.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RegForm />
    <ReactHookForm />
  </React.StrictMode>,
)
