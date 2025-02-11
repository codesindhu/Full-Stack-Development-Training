// import React from 'react'
// import {user, id} from './CompA.jsx'
// const CompC = () => {
//   return (
//     <div>
//         <user.Consumer>
//             {
//                 (name)=>{
//                     return(
//                         <>
//                         <id.Consumer>
//                             {
//                                 (num)=>{
//                                     return(
//                                         <h1>my name is {name} and id is {num}</h1>
//                                     )
//                                 }
//                             }
//                         </id.Consumer>
//                         </>
//                     )
//                 }
//             }
//         </user.Consumer>
//     </div>
//   )
// }
// export default CompC

import React, { useContext } from 'react'
import { userName, id } from './CompA'

const CompC = () => {
    let user = useContext(userName)
    let rollno = useContext(id)
  return (
    <div>
        <h1>name is {user} and id is {rollno}</h1>
    </div>
  )
}

export default CompC