import React from "react";
import "./index.css"
import logo from "./assets/images/logo.svg"

function Footer() {
    return (
        <footer className="footer">
            <img src={logo} alt="Little Lemon logo"></img>
            <div>
                <h4>Doormat Navigation</h4>
                <nav>
                    <ul>
                        <li><a>Home</a></li>
                        <li><a>About</a></li>
                        <li><a>Menu</a></li>
                        <li><a>Reservations</a></li>
                        <li><a>Order Online</a></li>
                        <li><a>Login</a></li>
                    </ul>
                </nav>
            </div>
            <div>
                <h4>Contact</h4>
                <ul>
                    <li><a>Address</a></li>
                    <li><a>Phone number</a></li>
                    <li><a>E-mail</a></li>
                </ul>
            </div>
            <div>
                <h4>Social Media Links</h4>
                <ul>
                    <li><a>Social link 1</a></li>
                    <li><a>Social link 2</a></li>
                    <li><a>Social link 3</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;