import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
    const [userState,setUserState] = useState("Login");
    const handleClick = () => {
        userState==="Login" ? setUserState("Logout") : setUserState("Login")
    }
    return (<div className="header">
        <div className="logo-container">
            <img className="logo" src={LOGO_URL}></img>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>Abous Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
                <button onClick={handleClick} className="login-btn">{userState}</button>
            </ul>
        </div>
    </div>)
}

export default Header;