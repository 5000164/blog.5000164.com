module.exports = {
  siteMetadata: {
    title: `5000164 is here`,
    description: `This blog is written about my life include technology.`,
    name: "Hiroshi Sugawara",
    profile:
      "Web Developer. \"Stably Unstable\" is my motto. After studying English in Australia, I am thinking about what happiness is, in Denmark.",
    consent: {
      text: "This website uses cookies. <a href='/privacy/'>Learn more</a>",
      accept: "Accept",
      decline: "Decline",
    },
    siteUrl: `https://blog.5000164.com`,
    image: `/icon.png`,
    twitterUsername: `@5000164`,
    repository: `https://github.com/5000164/blog.5000164.com`,
    profileUrl: `https://5000164.com`,
  },
  plugins: [
    {
      resolve: "gatsby-theme-blog",
      options: {},
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `5000164 is here`,
        short_name: `5000164 is here`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://blog.5000164.com`,
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: "UA-139878446-1",
        },
      },
    },
  ],
}
