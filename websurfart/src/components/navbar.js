import React, { Fragment, Component } from 'react';
import logo from "../images/logo.png";
import { Link, animateScroll as scroll } from "react-scroll";

import "./navbar.scss";

export class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = this.getInitialState();
    }

    getInitialState = () => ({
        isSidebarOpen: false
    });

    handleBurgerClick = () => {
        this.setState({ isSidebarOpen: !this.state.isSidebarOpen });
    }

    scrollToTop = () => {
        scroll.scrollToTop();
    };

    render() {
        const { isSidebarOpen } = this.state;
        console.warn('state', this.state);

        return (
            <Fragment>
                <nav className={`nav ${isSidebarOpen === true ? 'is-visible' : ''}`} id="navbar">
                    <div className="nav-content">
                        {/*<img
                        src={logo}
                        className="nav-logo"
                        alt="logo"
                        onClick={this.scrollToTop}
                    />*/}
                        <div className="nav-name" onClick={this.scrollToTop}>
                            Nebojsa Brnjasevic
                    </div>
                        <ul className="nav-items">
                            <li className="nav-item">
                                <Link
                                    activeClass="active"
                                    to="section1"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    onClick={this.handleBurgerClick}
                                >
                                    Section 1
                            </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    activeClass="active"
                                    to="section2"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    onClick={this.handleBurgerClick}
                                >
                                    Section 2
                            </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    activeClass="active"
                                    to="section3"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    onClick={this.handleBurgerClick}
                                >
                                    Section 3
                            </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    activeClass="active"
                                    to="section4"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    onClick={this.handleBurgerClick}
                                >
                                    Section 4
                            </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    activeClass="active"
                                    to="section5"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    onClick={this.handleBurgerClick}
                                >
                                    Section 5
                            </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className={`nav-burger ${isSidebarOpen === true ? 'is-clicked' : ''}`} onClick={this.handleBurgerClick}>
                    <span className="icon-bar top-bar"></span>
                    <span className="icon-bar middle-bar"></span>
                    <span className="icon-bar bottom-bar"></span>
                </div>
            </Fragment>
        )
    }
}

export default Navbar

