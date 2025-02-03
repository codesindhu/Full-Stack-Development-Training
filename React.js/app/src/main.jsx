import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Cbc from './components/Cbc'
import Fbc from './components/Fbc'
import Demo from './components/demo'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Cbc/>
    <Fbc/>
    <Demo/> 
  </StrictMode>,
)
