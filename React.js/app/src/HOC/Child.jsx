// import React from 'react'
// import Hoc from './Hoc'
// const Child = (name) => {
//   return (
//     <div>
//         <h1>my name is : {name}</h1>
//     </div>
//   )
// }
// export default Hoc(Child)

// import React from 'react'
// import Hoc from './Hoc'
// const Child = ({state , demo}) => {
//   return (
//     <div>
//         <h1>{state}</h1>
//         <button onClick={demo}>Click</button>
//     </div>
//   )
// }
// export default Hoc(Child)

// import React from 'react'
// import Hoc from './Hoc'
// const Child = ({name , demo}) => {
//   return (
//     <div>
//         <h1>my name is : {name}</h1>
//         <button onClick={demo}>Click</button>
//     </div>
//   )
// }
// export default Hoc(Child)


import React from 'react'
import Hoc from './Hoc'
const Child = ({arr1}) => {
  return (
    <div>
        {
            arr1.map((x,index) => {
                return(
                    <li key={index}>{x}</li>
                )
            })
        }
    </div>
  )
}
export default Hoc(Child)