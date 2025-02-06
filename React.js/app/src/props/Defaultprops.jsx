// const Greeting = ({ name }) => {
//     return <h1>Hello, {name}!</h1>;
//   };
  
//   const App = () => {
//     return <Greeting />; // Will show "Hello, undefined!"
//   };
  
//   export default App;
import React from "react";
const Greeting = ({ name = "Guest" }) => {
    return <h1>Hello, {name}!</h1>;
  };
  
  const Defaultprops = () => {
    return <Greeting />; // Will show "Hello, Guest!"
  };
  
  export default Defaultprops;