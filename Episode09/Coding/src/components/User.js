import { useState } from "react";

const User = ({name,location,contact}) => {
    const [count,setCount] = useState(0);
    const [count2,setCount2] = useState(2);
    return (
        <div className="user-card">
            <h4>Functional</h4>
            <h4>Count: {count}</h4>
            <h4>Count2: {count2}</h4>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: @{contact}</h4>
        </div>
    )
}

export default User;