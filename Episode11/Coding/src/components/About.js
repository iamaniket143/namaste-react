import User from "./User";
import UserClass from "./UserClass";
import React, { useEffect } from "react";



const About1 = () => {
    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         console.log("Hello World F");
    //     },1000);
        
    //     return () => {
    //         console.log("Component will unmount");
    //         clearInterval(timer);
    //     }
        
        
    // },[]);
    return <>
    <div className="about">
        <h1>About Us</h1>
        {/* <User name="Aniket Pantawane" location="Nagpur" contact="aniket.pantawane" /> */}
        <UserClass name="Aniket Pantawane" location="Nagpur" contact="aniket.pantawane" />
    </div>
    </>
}

class About extends React.Component {
    constructor(props) {
        super(props);
        console.log("Parent Constructor");
    }

    componentDidMount() {
        console.log("Parent Component Did Mount");
    }
    
    render() {
        console.log("Parent Render");
        return <>
    <div className="about">
        <h1>About Us</h1>
        <UserClass name="Aniket Pantawane" location="Nagpur" contact="aniket.pantawane" />
    </div>
    </>
    }
}


export default About1;