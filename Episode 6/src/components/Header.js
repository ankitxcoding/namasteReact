import {LOGO} from "../utils/imgLink";

const Header=()=> {
    return (
        <div className="header">
            <div className="logo">
                <img src={LOGO} alt="logo"/>
            </div>
            <div className="navbar">
                <ul>
                    <li>Home</li>
                    <li>Account</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;