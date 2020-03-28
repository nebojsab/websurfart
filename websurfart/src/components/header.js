import PropTypes from "prop-types"
import React, { Component } from "react"
import Navbar from "./navbar"
import { Link } from "react-scroll";

import "./header.scss";
export class Header extends Component {
  static propTypes = {
    myName: PropTypes.string,
    myTitle: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }

  getInitialState = () => ({
    myName: ``,
    myTitle: ``,
    elHeight: 0,
    isTop: 'top',
  });

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const elHeight = this.heroElement.clientHeight;
      this.setState({ elHeight });
      if (window.scrollY > elHeight) {
        this.setState({ isTop: 'notTop' })
      } else {
        this.setState({ isTop: 'top' })
      }
    });
  }

  render() {
    const { myName } = this.props;
    const { myTitle } = this.props;
    const { isTop } = this.state;

    return (
      <header className={`header ${isTop === 'top' ? 'transparent-nav' : ''}`}>
        <Navbar />
        <div className="my-name">{myName}</div>
        <div className="my-title">{myTitle}</div>
        <div
          ref={(heroElement) => { this.heroElement = heroElement }}
          className={`header-img`}
          id="hero-img"
        ></div>
        <div
          id="scroller"
          className="scroller">
          <Link
            to="section1"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          ><span></span></Link>
        </div>
      </header>
    )
  }
}

export default Header
