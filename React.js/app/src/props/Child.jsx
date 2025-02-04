// import React from "react"
// class Child extends React.Component{
//     render(){
//         return(
//             <>
//             <h1>my name is  {this.props.name}</h1>
//             <h1>Group Name   {this.props.grp}</h1>
//             <h1>Studying   {this.props.year}</h1>
//             <h1>In my clg named  {this.props.clg}</h1>
//             </>
//         )       
//     }
// }
// export default Child

// import React from 'react'
// const Child = (props) => {
//     console.log(props);
//     let {name,id,designation} = props.obj //destructring the object
//   return (
//     <div>
//         {/* <h1>my name is {props.name}</h1> */} 
//         {/* <h1>the id is {props.id}</h1>/ */}
//         {/* {
//           props.arr.map((x)=>{
//             return(
//               <li>{x}</li>
//             )
//           })
//         } */}
//         <h1>{name},{id},{designation}</h1>
//     </div>
//   )
// }
// export default Child

import React from 'react'

const Child = (props) => {
  return (
    <div>
      <button onClick={()=>props.fun()}>Click</button>
    </div>
  )
}

export default Child