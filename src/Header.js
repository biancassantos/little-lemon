import React from "react";
import { Link } from "react-router-dom";
import "./index.css"
import logo from "./assets/images/logo.svg"

function Header() {
    return (
        <header className="header">
            <img src={logo} alt="Little Lemon logo"></img>
            <nav>
                <ul className="navbar">
                    <li><Link to="/">Home</Link></li>
                    <li><Link>About</Link></li>
                    <li><Link>Menu</Link></li>
                    <li><Link>Reservations</Link></li>
                    <li><Link>Order Online</Link></li>
                    <li><Link>Login</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;