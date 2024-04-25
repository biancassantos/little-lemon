import React from "react";
import logo from "../public/logo.svg"
import Nav from "./Nav";

function Footer() {
    return (
        <footer>
            <img src={logo} alt="Little Lemon logo"></img>
            <div>
                <h4>Doormat Navigation</h4>
                <Nav />
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