import PropTypes from "prop-types"
import React from "react"
import hero from "../images/hero.jpg"
import { Link, animateScroll as scroll } from "react-scroll";

import "./header.scss";

const Header = ({ siteTitle }) => (
  <header className="header">
    <img className="header-img" src={hero} alt="Hero Image" />
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
    {/*{siteTitle}*/}
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
