//without_useContext
import React, { useState } from "react";
function Propdrill() {
    const [fName, setfName] = useState("firstName");
    return (
        <>
            <div>This is a Parent component</div>
            <ChildA fName={fName} />
        </>
    );
}
function ChildA({ fName }) {
    return (
        <>
            This is ChildA Component.
            <ChildB fName={fName} />
        </>
    );
}
function ChildB({ fName }) {
    return (
        <>
            This is ChildB Component.
            <ChildC fName={fName}  />
        </>
    );
}
function ChildC({ fName }) {
    return (
        <>
            This is ChildC component.
            <h3> Data from Parent component is as follows:</h3>
            <h4>{fName}</h4>
        </>
    );
}
export default Propdrill;
