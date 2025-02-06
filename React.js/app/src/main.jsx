import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import Cbc from './components/Cbc'
// import Fbc from './components/Fbc'
// import Demo from './components/demo'
// import Parent from './props/Parent'
import State from './state/State'
// import Propdrill from './props/Propdrill'
// import Propdruse from './props/Propdruse'
// import Defaultprops from './props/Defaultprops'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App/> */}
    {/* <Cbc/>
    <Fbc/>
    <Demo/>  */}
    {/* <Parent/> */}
    <State/>
    {/* <Propdrill/>
    <Propdruse/>
    <Defaultprops/> */}

  </StrictMode>,
)
