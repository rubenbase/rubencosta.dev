module.exports = {
	siteMetadata: {
		title: `Gatsby Starter Blog`,
		author: {
			name: `Kyle Mathews`,
			summary: `who lives and works in San Francisco building useful things.`
		},
		description: `A starter blog demonstrating what Gatsby can do.`,
		siteUrl: `https://gatsby-starter-blog-demo.netlify.com/`,
		social: {
			twitter: `kylemathews`
		}
	},
	plugins: [
		`gatsby-plugin-resolve-src`,
		{
			resolve: `gatsby-plugin-create-client-paths`,
			options: { prefixes: [`/app/*`] }
		},
		`gatsby-plugin-emotion`,
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				extensions: [`.mdx`, `.md`]
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/blog`,
				name: `blog`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/assets`,
				name: `assets`
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Gatsby Starter Blog`,
				short_name: `GatsbyJS`,
				start_url: `/`,
				background_color: `#ffffff`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `content/assets/gatsby-icon.png`
			}
		},
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography`
			}
		}
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	]
}
