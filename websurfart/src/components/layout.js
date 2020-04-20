/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { SectionContent } from "./SectionContent"
import { Element } from 'react-scroll'

import Header from "./header"
import "typeface-raleway"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <Fragment>
      <Header myName={data.site.siteMetadata.title} myTitle={data.site.siteMetadata.description} />
      <div
        style={{
          margin: `0 auto`,
          padding: `0 0 1.45rem`,
        }}
      >
        <main>{children}</main>
        <Element className="section-plh">
          <SectionContent
            id="section1"
            title="About"
            bcg="black"
            pageName="about" />
        </Element>
        <Element className="section-plh">
          <SectionContent
            id="section2"
            bcg="blue"
            pageName="my-work" />
        </Element>
        <Element className="section-plh">
          <SectionContent
            id="section3"
            title="Knows and need to knows"
            bcg="turquoise"
            pageName="skills" />
        </Element>
        <Element className="section-plh">
          <SectionContent
            id="section4"
            title="Section 4"
            bcg="green"
            pageName="about" />
        </Element>
        <Element className="section-plh">
          <SectionContent
            id="section5"
            title="Section 5"
            bcg="gray"
            pageName="about" />
        </Element>
        <footer>
          © {new Date().getFullYear()}
        </footer>
      </div>
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
