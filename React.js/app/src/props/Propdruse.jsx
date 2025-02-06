//with_useContext.js

import React, { useState, useContext } from "react";

let context = React.createContext(null);
function Propdruse() {
    const [fName, setfName] = useState("firstName");
    return (
        <context.Provider value={{fName}}>
            <div>This is a Parent component</div>
            <ChildA />
        </context.Provider>
    );
}

function ChildA() {
    return (
        <>
            This is ChildA Component.
            <ChildB />
        </>
    );
}

function ChildB() {
    return (
        <>
            This is ChildB Component.
            <ChildC />
        </>
    );
}

function ChildC() {
    const {fName} = useContext(context);
    return (
        <>
            This is ChildC component.
            <h3> Data from Parent component is as follows:</h3>
            <h4>{fName}</h4>
        </>
    );
}

export default Propdruse;
