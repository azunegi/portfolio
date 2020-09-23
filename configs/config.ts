import { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  pathPrefix: "/portfolio",
  siteMetadata: {
    title: "Azuki's Portfolio",
    description: "Webデザイナー「Azuki」のポートフォリオサイト",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-typescript",
    "gatsby-plugin-emotion",
    `gatsby-plugin-sass`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-transition-link`,
    `react-hook-form`,
    {
      resolve: "gatsby-plugin-graphql-codegen",
      options: {
        fileName: "types/graphql.d.ts",
        documentPaths: [
          "./src/**/*.{ts,tsx}",
        ],
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}

export default config
