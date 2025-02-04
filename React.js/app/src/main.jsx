import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Cbc from './components/Cbc'
import Fbc from './components/Fbc'
import Demo from './components/demo'
import Parent from './props/Parent'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Cbc/>
    <Fbc/>
    <Demo/>  */}
    <Parent/>
  </StrictMode>,
)
