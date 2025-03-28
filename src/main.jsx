import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './todo.css'
import App from './App.jsx'
import { Todo } from './Todo.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
