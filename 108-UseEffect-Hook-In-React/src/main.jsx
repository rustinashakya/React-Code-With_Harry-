import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  //this checks the code, and render the useEffect for two times 
  // <StrictMode> 
    <App />
  // </StrictMode>,
)
