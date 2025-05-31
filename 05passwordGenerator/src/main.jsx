import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import GeneratorHome from './GeneratorHome'



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <GeneratorHome/>
  </StrictMode>,
)
