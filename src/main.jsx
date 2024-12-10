/**
 * @copyright 2024 BondDv
 * @license Apache-2.0
 */

//Node module
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//CSS link
import App from './App.jsx'
import './index.css'
import 'lenis/dist/lenis.css'

//component

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
