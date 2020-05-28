const config = require("./config")

module.exports = {
  siteMetadata: {
    title: `innovagesoftwares`,
    description: `Innovage Softwares`,
    author: `@innovagesoftwares`,
    wpUrl: config.wordPressUrl,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        // This type will contain remote schema Query type
        typeName: `WPGraphQL`,
        // This is field under which it's accessible
        fieldName: `wpgraphql`,
        // Url to query from
        url: `${config.wordPressUrl}/graphql`,
        searchAndReplaceContentUrls: {
          sourceUrl: `${config.wordPressUrl}`,
          replacementUrl: ``,
        },
        // refetch interval in seconds
        // refetchInterval: 60,
      }
    }
  ]
}
