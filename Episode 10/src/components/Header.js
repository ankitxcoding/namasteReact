import { useState } from "react";
import { LOGO } from "../utils/imgLink";
import { Link } from "react-router-dom";
import useUserOffline from "../utils/useUserOffline";

const Header=()=> {
    const[loginBtn, setLoginBtn]=useState("Login");
    
    const offlineStatus=useUserOffline();

    return (
        <div className="flex justify-between items-center">
            <div className="size-28 p-4">
                <img src={LOGO} alt="logo"/>
            </div>
            <div className="p-4">
                <ul className="flex">
                    <li className="m-4 font-bold text-lg hover:text-blue-500"><Link to="/">Home</Link></li>
                    <li className="m-4 font-bold text-lg hover:text-blue-500"><Link to="/about">About Us</Link></li>
                    <li className="m-4 font-bold text-lg hover:text-blue-500"><Link to="/contact">Contact Us</Link></li>
                    <li className="m-4 font-bold text-lg hover:text-blue-500"><Link to="/account">Account</Link></li>
                    <li className="m-4 font-bold text-lg hover:text-blue-500"><Link to="/cart">Cart</Link></li>
                    <button className="m-4 font-bold text-lg hover:text-blue-500" onClick={()=> {
                        loginBtn==="Login"? setLoginBtn("Logout") : setLoginBtn("Login");
                    }}>{loginBtn} {offlineStatus? <span className="text-green-600">&#x2022;</span>: <span className="text-red-600">&#x2022;</span>}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;