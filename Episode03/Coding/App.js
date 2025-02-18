import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => is a JS Object => after rendering it becomes HTML element

const heading = React.createElement("h1",{id:"h",style:{color: "red"}},"React");
const root = ReactDOM.createRoot(document.getElementById("root"));


// h1 tag inside JSX
const headingJSX = <h1>Created using JSX</h1>;

root.render(headingJSX);