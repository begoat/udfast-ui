module.exports = {
  siteMetadata: {
    title: `UDFast-UI`,
    description: `ui for udfast app, which is working on p2p file transfer.`,
    author: `william huang`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {}
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-remove-trailing-slashes`
    // { // actuall there is dart-scss that can correctly parse scss but it seems error will show on vscode
    //   resolve: `gatsby-plugin-sass`,
    //   options: {
    //     implementation: require("sass"),
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  pathPrefix: "/udfast-ui",
}
