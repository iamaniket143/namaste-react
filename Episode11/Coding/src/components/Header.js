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
    return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-100 lg:bg-green-50">
        <div className="logo-container">
        <Link to="/"><img className="w-56" src={LOGO_URL}></img></Link>
        </div>
        <div className="flex items-center">
            <ul className="flex p-4 m-4">
                <li className="px-4">Online Status: {status ? "✅" : "🔴"}</li>
                <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                <li className="px-4"><Link to="/">Home</Link></li>
                <li className="px-4"><Link to="/about">Abous Us</Link></li>
                <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                <li className="px-4"><Link to="/cart">Cart</Link></li>
                <button onClick={handleClick} className="login-btn">{userState}</button>
            </ul>
        </div>
    </div>)
}

export default Header;