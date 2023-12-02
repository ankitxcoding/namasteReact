import { useState } from "react";
import {LOGO} from "../utils/imgLink";

const Header=()=> {
    const[loginBtn, setLoginBtn]=useState("Login");

    return (
        <div className="header">
            <div className="logo">
                <img src={LOGO} alt="logo"/>
            </div>
            <div className="navbar">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Account</li>
                    <li>Cart</li>
                    <button className="loginBtn" onClick={()=> {
                        loginBtn==="Login"? setLoginBtn("Logout") : setLoginBtn("Login");
                    }}>{loginBtn}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;