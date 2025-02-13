//no dependency

// import React, { useEffect, useState } from 'react'
// const UseEffect = () => {
//     let [state,setState]=useState(0)
//     useEffect(()=>{
//         setTimeout(()=>{
//             setState(state+1)
//         },2000)
//     })
//   return (
//     <div>{state}</div>
//   )
// }
// export default UseEffect

//Empty Dependency
// import React, { useEffect, useState } from 'react'
// const UseEffect = () => {
//     let [state,setState]=useState(0)
//     useEffect(()=>{
//         setTimeout(()=>{
//             setState(state+1)
//         },2000)
//     },[])
//   return (
//     <div>{state}</div>
//   )
// }
// export default UseEffect

//Dependency With Value(props or state)
//component will renders when state updates
// import React, { useEffect, useState } from 'react'

// const UseEffect = () => {
//     let [state,setState] =useState(0)
//     let [incr,setIncr]=useState(0)
//     useEffect(()=>{
//         setIncr(state*2)
//     },[state])
//   return (
//     <div>
//         <h1>state : {state}</h1>
//         <h1>incr : {incr}</h1>
//         <button onClick={()=>setState((c)=>c+1)}>Click</button>
//     </div>
//   )
// }
// export default UseEffect


//FETCH API using uesEffect hook
// import React, { useEffect, useState } from 'react'
// import './useeffect.css'
// const UseEffect = () => {
//     let [state,setState] =useState([])

//     useEffect(()=>{
//         window.fetch('https://fakestoreapi.com/products')
//         .then((x)=>x.json())
//         .then((res)=> setState(res))
//     },[])
//   return (
//     <div>
//         <table>
//             <thead>
//                 <tr>
//                     <th>id</th>
//                     <th>price</th>
//                     <th>image</th>
//                 </tr>
//             </thead>
//         </table>
//         {
//             state.map((data)=>{
//                 console.log(data);
//                 return(
//                     <>
//                         <tr>
//                             <td>{data.id}</td>
//                             <td>{data.price}</td>
//                             <td><img src={data.image} alt=''/></td>
//                         </tr>
//                     </>
//                 )
//             })
//         }
//     </div>
//   )
// }

// export default UseEffect


import React, { useEffect, useState } from 'react'
import './useeffect.css'
const UseEffect = () => {
    let [state,setState] =useState([])

    useEffect(()=>{
        window.fetch('https://api.github.com/users')
        .then((x)=>x.json())
        .then((res)=> setState(res))
    },[])
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>login</th>
                    <th>id</th>
                    <th>avatar_url</th>
                </tr>
            </thead>
        </table>
        {
            state.map((data)=>{
                console.log(data);
                return(
                    <>
                        <tr>
                            <td>{data.login}</td>
                            <td>{data.id}</td>
                            <td><img src={data.avatar_url} alt=''/></td>
                        </tr>
                    </>
                )
            })
        }
    </div>
  )
}

export default UseEffect