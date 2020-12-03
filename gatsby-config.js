require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: `Pet's Club`,
    description: `Tienda especializada en productos para tus mascotas.`,
    author: `@adinjesuha`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-source-takeshape',
      options: {
        apiKey: process.env.TAKESHAPE_TOKEN,
        projectId: process.env.TAKESHAPE_PROJECT,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto\:300,400,500,700`
        ],
      }
    },
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
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#f53e5b`,
        theme_color: `#f53e5b`,
        display: `minimal-ui`,
        icon: `src/images/petsclub-icon.png`,
      },
    },
  ],
}
