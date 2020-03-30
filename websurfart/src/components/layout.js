/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
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
    <>
      <Header myName={data.site.siteMetadata.title} myTitle={data.site.siteMetadata.description} />
      <div
        style={{
          margin: `0 auto`,
          padding: `0 0 1.45rem`,
        }}
      >
        <main>{children}</main>
        <Element>
          <SectionContent
            id="section1"
            title="Section 1" />
        </Element>
        <Element>
          <SectionContent
            id="section2"
            title="Section 2" />
        </Element>
        <Element>
          <SectionContent
            id="section3"
            title="Section 3" />
        </Element>
        <Element>
          <SectionContent
            id="section4"
            title="Section 4" />
        </Element>
        <Element>
          <SectionContent
            id="section5"
            title="Section 5" />
        </Element>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
