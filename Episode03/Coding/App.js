import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => is a JS Object => after rendering it becomes HTML element

const heading = React.createElement("h1",{id:"h",style:{color: "red"}},"React");
const root = ReactDOM.createRoot(document.getElementById("root"));


// h1 tag inside JSX
const headingJSX = <h1>Created using JSX</h1>;

// React Component (JS Function)

function HeadingComponent1() {
    return <h1>React Component</h1>
}


const HeadingComponent2 = () => {
    return <h1>React Component Arrow</h1>}

    
const HeadingComponent2a = () => <h1>React Component Arrow Short</h1>

const number = 101;

const HeadingComponent2b = () => (
    <h1>React Component Arrow2b {number}</h1>
)


const HeadingComponent3 = function()  {
    return <h1>React Component Arrowas</h1>
}

const HeadingComponent2c = () => (
    <p>{number}</p>
)

root.render(<HeadingComponent2c />);

