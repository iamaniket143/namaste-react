// const h = React.createElement("h1",{id:"heading"},"Hello World from ReactJS");
// const r = ReactDOM.createRoot(document.getElementById("root"));
// r.render(h);


// const heading1 = React.createElement("h1",{style:{color:"red"}},"Hello World"); 
// const heading2 = React.createElement("h2",{style:{color:"red"}},"Hello World");
// const child = React.createElement("div",{id:"child"},[heading1,heading2])
// const parent = React.createElement("div",{id:"parent"},child);
// parent
//     child1
//     child2

const heading1 = React.createElement("h1",{style:{color:"red"}},"Hello World"); 
const heading2 = React.createElement("h2",{style:{color:"red"}},"Hello World");
const child1 = React.createElement("div",{id:"child1"},[heading1,heading2])
const child2 = React.createElement("div",{id:"child2"},[heading1,heading2])
const parent = React.createElement("div",{id:"parent"},[child1,child2]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);