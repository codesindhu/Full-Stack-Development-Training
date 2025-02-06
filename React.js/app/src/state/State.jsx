// import React from 'react'
// import { useState } from 'react'
// const State = () => {
// //     let [name,setName] = useState("abhi")
// //     console.log(name);
// //     console.log(setName);
// //     let demo = ()=>{
// //         setName("ramu")
// //     }
//     let [number,setNumber] =useState(10)
//         let demo = ()=>{
//         setNumber(20)
//     }
//   return (
//     <div>
//         <h1>{number}</h1>
//         <button onClick={demo}>Click</button>
//     </div>
//   )
    
// }

// export default State

// import React, { useState } from 'react'

// const State = () => {
//   let [state,setState] = useState(0)
//   let incr = ()=>{
//     setState(state+1)
//   }
//   let reset=()=>{
//     setState(0)
//   }
//   let decr=()=>{
//     setState(state-1)
//   }
//   return (
//     <>
//       <h1>{state}</h1>
//       <button onClick={incr}>Increment</button>
//       <button onClick={reset}>Reset</button>
//       <button onClick={decr}>Decrement</button>
//     </>
//   )
// }

// export default State

// import React, { useState } from 'react'

// const State = () => {
//   let [name, setName]=useState('')
//   let [password, setPassword] = useState('')

//   let demo = (e)=>{
//     e.preventDefault()
//     console.log({name,password});
//     name === 'admin' && password === '12345' ? window.open("http://pixabay.com"):console.log("error");
//   }
//   return (
//     <>
//     <form action=''>
//       <label htmlFor='name'>Name:</label>
//       <input type='text' name='name' id='name' value={name} onChange={(e)=>{setName(e.target.value)}}/>
//       <br/>
//       <label htmlFor='password'>Password:</label>
//       <input type='text' name='password' id='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
//       <br/>
//       <button onClick={demo}>Submit</button>
//     </form>
//     </>
//     )
// }

// export default State

import React, { useRef, useState } from 'react'
import video from "./1.mp4"
const State = () => {
  let [state,setState]=useState(true)
  let ref1 = useRef()
  let demo =()=>{
    setState(!state)
    state=== true ? ref1.current.play() : ref1.current.pause()
  }
  return (
    <div>
      <video src={video} height="500px" ref={ref1}></video>
      <button onClick={demo}>click</button>
    </div>
  )
}

export default State