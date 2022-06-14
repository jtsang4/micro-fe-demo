import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from './routes'
import './index.css'

// eslint-disable-next-line no-console
console.log('Window object of child app:', window)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename={window.basename || '/'}>
      <Routes />
    </BrowserRouter>
  </React.StrictMode>,
)
