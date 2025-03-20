import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './todo.css'
import App from './App.jsx'
import Todo from './Tode.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
