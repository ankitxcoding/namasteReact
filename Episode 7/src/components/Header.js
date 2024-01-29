import { useState } from "react";
import { LOGO } from "../utils/imgLink";
import { Link } from "react-router-dom";

const Header=()=> {
    const[loginBtn, setLoginBtn]=useState("Login");

    return (
        <div className="header">
            <div className="logo">
                <img src={LOGO} alt="logo"/>
            </div>
            <div className="navbar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/account">Account</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <button className="loginBtn" onClick={()=> {
                        loginBtn==="Login"? setLoginBtn("Logout") : setLoginBtn("Login");
                    }}>{loginBtn}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;