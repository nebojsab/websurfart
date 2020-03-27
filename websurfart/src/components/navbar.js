import React, { Component } from 'react';
import logo from "../images/logo.png";

import "./navbar.scss";

export class Navbar extends Component {
    render() {
        return (
            <nav className="nav" id="navbar">
                <div className="nav-content">
                    <img
                        src={logo}
                        className="nav-logo"
                        alt="logo"
                        onClick={this.scrollToTop}
                    />
                    <ul className="nav-items">
                        <li className="nav-item">Section 1</li>
                        <li className="nav-item">Section 2</li>
                        <li className="nav-item">Section 3</li>
                        <li className="nav-item">Section 4</li>
                        <li className="nav-item">Section 5</li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar

