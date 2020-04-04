import { graphql, useStaticQuery } from 'gatsby'

export const useSiteMetadata = () => {
	const { site } = useStaticQuery(
		graphql`
			query SITE_METADATA_QUERY {
				site {
					siteMetadata {
						title
						author {
							name
							summary
						}
						description
						siteUrl
						social {
							linkedin
						}
						siteLanguage
						siteLocale
					}
				}
			}
		`
	)
	return site.siteMetadata
}
