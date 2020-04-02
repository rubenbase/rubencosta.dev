import React from 'react'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import styled from '@emotion/styled'
import Hero from 'components/sections/hero'

export default ({ data, pageContext }) => {
	const { frontmatter, body } = data.mdx
	const { previous, next } = pageContext

	return (
		<>
			<Hero align="center" title={frontmatter.title} subtitle=" " />

			<PostWrapper>
				<MetadataContainer>
					<p>{frontmatter.date}</p>
				</MetadataContainer>
				<MDXRenderer>{body}</MDXRenderer>
				{previous === false ? null : (
					<>
						{previous && (
							<Link to={'/blog' + previous.fields.slug}>
								<p>{previous.frontmatter.title}</p>
							</Link>
						)}
					</>
				)}
				{next === false ? null : (
					<>
						{next && (
							<Link to={'/blog' + next.fields.slug}>
								<p>{next.frontmatter.title}</p>
							</Link>
						)}
					</>
				)}
			</PostWrapper>
		</>
	)
}

const PostWrapper = styled.section`
	max-width: 748px;
	margin: 0 auto;
	padding: 0 2em;
`
const MetadataContainer = styled.section`
	display: flex;
	padding: 2em 0 0.5em 0;
	align-items: center;
	margin-bottom: 2em;
	& p {
		color: #aaa;
		margin: 0;
	}
`

export const query = graphql`
	query PostsBySlug($slug: String!) {
		mdx(fields: { slug: { eq: $slug } }) {
			body
			frontmatter {
				title
				date(formatString: "YYYY MMMM Do")
			}
		}
	}
`
