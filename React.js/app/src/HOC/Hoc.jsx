// import React from 'react'
// let Hoc = (OriginalComponent)=>{
//     let newComponent = ()=>{
//         return <OriginalComponent name="abhi"/>
//     }
//     return newComponent
// }
// export default Hoc

// import React, { useState } from 'react'
// let Hoc = (OriginalComponent) => {
//     let newComponent =()=>{
//         let [state , setState] = useState(0)
//         let demo = ()=>{
//             setState(state + 1)
//         }
//         return <OriginalComponent state={state} demo={demo}/>
//     }
//     return newComponent   
// }
// export default Hoc

// import React, { useState } from 'react'
// let Hoc = (OriginalComponent) => {
//     let newComponent =()=>{
//         let [name , setName] = useState("abhi")
//         let demo = ()=>{
//             setName("ramu")
//         }
//         return <OriginalComponent name={name} demo={demo}/>
//     }
//     return newComponent  
// }
// export default Hoc

import React from 'react'

const Hoc = (OriginalComponent) => {
    let newComponent= ()=>{
        let arr =[10,20,30,40]
        return <OriginalComponent arr1={arr}/>
    }
    return newComponent
}

export default Hoc
