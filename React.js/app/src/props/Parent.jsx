// import React from "react"
// import Child from "./Child"
// class Parent extends React.Component{
//     obj = {
//         name : 'Sindhura',
//         batch : 'Group-5',
//         year : 'Third-Year',
//         university :'MRU',

//     }
//     render(){
//         return(
//             <>
//             <Child
//              name = {this.obj.name} grp = {this.obj.batch} year = {this.obj.year} clg = {this.obj.university}/>
//             </>
//         )
//     }
// }
// export default Parent

// import React from 'react'
// import Child from './Child'
// const Parent = () => {
//     let obj1 = {
//       name : "abc",
//       id : 1,
//       designation : "developer"
//     }
//   return (
//     <div>
//       {/* <Child name = 'abhi'/> */}
//       {/* <Child id = {10}/> */}
//       {/* <Child arr = {[10,20,30,40]}/> */}
//       <Child obj = {obj1}/>
//       </div>
//   )
// }
// export default Parent

import React from 'react'
import Child from './Child'

const Parent = () => {
  let demo = ()=>{
    window.alert("I am arrow function")
  }
  return (
    <>
       <Child fun = {demo}/>
    </>
  )
}

export default Parent
