/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [ 'gatsby-transformer-remark',
              'gatsby-plugin-sharp',
              `gatsby-transformer-sharp`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    }

  ],
  siteMetadata: {
    title: 'My Resume',
    description: 'This is my digital resume',
    copyright: 'Copyright (c) Varun Viswanathan'

  }
}
