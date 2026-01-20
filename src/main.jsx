import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import { Parent } from './contextApi/props/Parent.jsx'
import { Parent } from './contextApi/context/Parent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <App /> 
    {/* <Parent /> */}
    <Parent />
  </StrictMode>,
)
