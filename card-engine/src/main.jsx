import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
const root = document.getElementById("root");
root.classList.add("m-0")
root.style.padding = "5px"
createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
