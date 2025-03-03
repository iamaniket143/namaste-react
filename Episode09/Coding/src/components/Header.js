import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [userState,setUserState] = useState("Login");
    const status = useOnlineStatus();

    const handleClick = () => {
        userState==="Login" ? setUserState("Logout") : setUserState("Login")
    }
    return (<div className="header">
        <div className="logo-container">
        <Link to="/"><img className="logo" src={LOGO_URL}></img></Link>
        </div>
        <div className="nav-items">
            <ul>
                <li>Online Status: {status ? "✅" : "🔴"}</li>
                <li><Link to="/grocery">Grocery</Link></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">Abous Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <button onClick={handleClick} className="login-btn">{userState}</button>
            </ul>
        </div>
    </div>)
}

export default Header;