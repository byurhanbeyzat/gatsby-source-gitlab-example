const config = require('./config')

require('dotenv').config({ path: 'variables.env' })

module.exports = {
  siteMetadata: config.siteMetadata,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-gitlab`,
      options: {
        accessToken: process.env.GL_ACCESS_TOKEN,
      }
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        styles: `${__dirname}/src/styles`,
        components: `${__dirname}/src/components`,
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: config.siteManifest,
    },
  ]
}