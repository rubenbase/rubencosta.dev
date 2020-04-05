import React, { Component } from 'react'

import { graphql, Link } from 'gatsby'
import { formatDistance, parseISO } from 'date-fns'

import styled from '@emotion/styled'
import { css } from '@emotion/core'

import ResetCSS from 'components/atoms/reset-css'

import Hero from 'components/sections/hero'
import Wrapper from 'components/layouts/wrapper'

import Img from 'gatsby-image'

export default class Blog extends Component {
	render() {
		return (
			<>
				<ResetCSS />
				<Hero title="Blog" subtitle=" " />
				<BlogContainer>
					<Wrapper>
						<h2>Latest articles</h2>
						<ul
							css={css`
								margin: 3em 0;
								/* Grid Fallback */
								display: flex;
								flex-wrap: wrap;
								/* Supports Grid */
								display: grid;
								grid-template-columns: repeat(auto-fill, minmax(264px, 1fr));
								grid-auto-rows: auto;
								grid-gap: 1em;
							`}
						>
							{this.props.data.allMdx.nodes.map(({ id, excerpt, frontmatter, fields }) => (
								<Card key={id}>
									{!!frontmatter.cover ? (
										<Link to={`/blog/${fields.slug}`}>
											<Image
												backgroundColor="green"
												sizes={frontmatter.cover.childImageSharp.sizes}
												withWebp
											/>
										</Link>
									) : (
										<ImagePlaceholder />
									)}
									<h4
										css={css`
											margin: 1em 0;
										`}
									>
										<Link
											css={theme => css`
												color: ${theme.colors.dark200};
											`}
											to={`/blog/${fields.slug}`}
										>
											{' '}
											{frontmatter.title}
										</Link>
									</h4>
									<div
										css={css`
											display: flex;
										`}
									>
										<p
											css={css`
												text-rendering: optimizeLegibility;
												color: #aaa;
												::after {
													content: '\u2219';
													margin: 0 4px;
												}
											`}
										>
											Performance
										</p>
										<span
											css={css`
												text-rendering: optimizeLegibility;
												color: #aaa;
											`}
										>
											{formatDistance(parseISO(frontmatter.date), new Date())}
										</span>
									</div>
								</Card>
							))}
						</ul>
					</Wrapper>
				</BlogContainer>
			</>
		)
	}
}

const ImagePlaceholder = styled.div`
	width: 264px;
	height: 132px;
	background-color: #eaeaea;
`

const Card = styled.li`
	width: 264px;
	height: 220px;
`
const BlogContainer = styled.section`
	background-color: ${({ theme }) => theme.colors.light1};
	padding: 2em 0;
`
const Image = styled(Img)`
	width: 264px;
	height: 132px;
	background-size: cover;
	border-radius: 5px;
`

export const query = graphql`
	query SITE_BLOG_QUERY {
		allMdx(
			sort: { fields: [frontmatter___date], order: DESC }
			filter: { frontmatter: { published: { eq: true } } }
		) {
			nodes {
				id
				excerpt(pruneLength: 250)
				frontmatter {
					title
					date
					cover {
						publicURL
						childImageSharp {
							sizes(maxWidth: 2000, traceSVG: { color: "#639" }) {
								...GatsbyImageSharpSizes_tracedSVG
							}
						}
					}
				}
				fields {
					slug
				}
			}
		}
	}
`
