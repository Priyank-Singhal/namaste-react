import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
    const [loginBtn, setLoginBtn] = useState("Login");
    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);

    return (
        <div className="flex justify-between bg-gray-100 shadow-lg">
            <div>
                <img className="w-56" src={LOGO_URL} alt="app-image" />
            </div>
            <div className="flex items-center">
                <ul className="flex justify-between p-5 m-4">
                    <li className="px-4">
                        Status: {onlineStatus ?  "🟢" : "🔴"}
                    </li>
                    <li className="px-4">
                        <Link to="/"> Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/drinks">Drinks</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-4">Cart</li>
                    <button className="login-btn" onClick={() => {
                        loginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login")
                    }}>{loginBtn}</button>
                    <li className="px-2 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;