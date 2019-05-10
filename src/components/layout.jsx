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

      <p className="text-center text-grey-darker pb-8">
        &copy; {`${new Date().getFullYear()}`}{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://byurhanbeyzat.com/"
          className="text-black no-underline"
        >
          Byurhan Beyzat
        </a>
      </p>
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
