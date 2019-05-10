import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

import 'styles/app.scss'

const Layout = ({ children }) => {
  const {
    site: { siteMetadata: data },
  } = useStaticQuery(query)

  return (
    <>
      <Helmet>
        <title>{data.title}</title>
      </Helmet>
      <main>{children}</main>
    </>
  )
}
const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default Layout
