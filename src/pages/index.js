import React from 'react'
import { Link } from 'gatsby'

import styled from '@emotion/styled'
import { css } from '@emotion/core'

// components
import Hero from 'components/sections/hero'
import Wrapper from 'components/layouts/wrapper'
import ResetCSS from 'components/atoms/reset-css'

// import arrowImg from '../images/arrow.svg'
import { colors } from 'styles'
import Footer from 'components/organisms/footer'
import CookieOverlay from 'components/molecules/cookie-overlay'
// import ColorSwitch from 'components/molecules/color-switch'

export default class IndexPage extends React.Component {
	render() {
		return (
			<>
				<ResetCSS />
				{/* <ColorSwitch /> */}
				<CookieOverlay />
				{/* <button onClick={this.toggle}>Toggle Portal</button> */}

				<Hero />

				<SecondSection>
					<Wrapper>
						<Stats>
							<li>
								<strong>43</strong>
								<span>Youtube View</span>
							</li>
							<li>
								<strong>50+</strong>
								<span>Students</span>
							</li>
							<li>
								<strong>1</strong>
								<span>Course</span>
							</li>
							<li>
								<strong>10</strong>
								<span>Video tutorials</span>
							</li>
							<li>
								<strong>4</strong>
								<span>Countries</span>
							</li>
						</Stats>
					</Wrapper>
					<Wrapper>
						<h2
							css={css`
								text-align: center;
								position: relative;
								margin-top: 2em;
								::before {
									content: '';
									position: absolute;
									height: 5px;
									width: 30px;
									background-color: rgb(237, 50, 185);
									top: -0.3em;
								}
							`}
						>
							Read my latest articles
						</h2>
						<ArticlesContainer>
							{this.props.data.allMdx.nodes.map(({ id, excerpt, frontmatter, fields }) => (
								<Article key={id}>
									<h3>
										<Link to={`/blog/${fields.slug}`}>{frontmatter.title}</Link>
									</h3>
									<p>{excerpt}</p>
								</Article>
							))}
						</ArticlesContainer>
						<div
							css={css`
								margin: 2em 0;
								cursor: pointer;
								text-align: center;
							`}
						>
							<Link
								to="/blog"
								css={css`
									padding: 0.8em;
									color: ${colors.dark} !important;
									text-transform: uppercase;
									border: 1px dashed ${colors.dark};
									display: inline-block;
									transition: all 0.4s ease 0s;

									:hover {
										color: #ffffff !important;
										background: ${colors.dark};
										border-color: ${colors.dark};
										transition: all 0.4s ease 0s;
									}
								`}
							>
								see all the articles
							</Link>
						</div>
						{/* <Companies>
							<li>
								<img src="images/company1.svg" alt="company1" className="company1" />
								<img src="images/company2.svg" alt="company2" className="company2" />
								<img src="images/company1.svg" alt="company1" className="company1" />
								<img src="images/company2.svg" alt="company2" className="company2" />
							</li>
						</Companies> */}
					</Wrapper>
					{/* <CarousalContainer>
						<img
							css={css`
								display: none;
							`}
							src={arrowImg}
							id="right-arrow"
							alt="Move testimonials to the right"
						/>
						<Carousal>
							<li>
								<Blockquote>
									Deserunt tempor commodo occaecat eu. Reprehenderit aliqua ut pariatur laboris elit
									excepteur quis tempor nisi. Ea reprehenderit est sunt anim sit sit laborum labore
									ad eu sit tempor sit. Ut culpa quis id fugiat sint magna do esse dolore ipsum et.
									Cillum in ad consequat ex et enim pariatur non incididunt sunt reprehenderit sint
									cupidatat.
								</Blockquote>
								<Cite>John Doe</Cite>
							</li>
							<li>
								<Blockquote>
									Deserunt tempor commodo occaecat eu. Reprehenderit aliqua ut pariatur laboris elit
									excepteur quis tempor nisi. Ea reprehenderit est sunt anim sit sit laborum labore
									ad eu sit tempor sit. Ut culpa quis id fugiat sint magna do esse dolore ipsum et.
									Cillum in ad consequat ex et enim pariatur non incididunt sunt reprehenderit sint
									cupidatat.
								</Blockquote>
								<Cite>Nerea Pardo</Cite>
							</li>
						</Carousal>
						<img
							css={css`
								display: none;
							`}
							src={arrowImg}
							id="right-arrow"
							alt="Move testimonials to the right"
						/>
					</CarousalContainer> */}
				</SecondSection>
				<Footer />
			</>
		)
	}
}

const SecondSection = styled.div`
	background-color: #fff;
`
const Stats = styled.ul`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
	justify-content: space-around;
	margin-top: 2em;
	margin-bottom: 0;

	& li {
		margin-bottom: 1.5em;
	}

	strong {
		font-size: 1.4em;
	}

	span {
		display: block;
		text-transform: uppercase;
		font-size: 0.75em;
	}
`
// const CarousalContainer = styled.div`
// 	padding: 0 1.5em 2em;
// 	max-width: 1230px;
// 	margin: 0 auto;
// `
const ArticlesContainer = styled.div`
	text-align: center;
	padding: 2em 1.5em;
	max-width: 1230px;
	margin: 0 auto;
	background-color: rgb(247, 248, 252);
`
const Article = styled.div`
	padding: 1.5em;
	& h3 {
		margin-bottom: 0.5em;
	}

	& p {
		font-style: italic;
		margin: 0;
	}
`
// const Carousal = styled.ul`
// 	margin-bottom: 1em;

// 	li {
// 		background-color: rgb(247, 248, 252);
// 		padding: 1em;
// 		margin-bottom: 1em;
// 	}
// `
// const Blockquote = styled.blockquote`
// 	margin: 0;
// 	font-size: 0.8em;
// 	line-height: 1.8em;
// 	margin-bottom: 1em;
// `
// const Cite = styled.cite`
// 	color: #e379ff;
// 	font-weight: 0.8em;
// 	font-weight: bold;
// 	font-style: normal;
// 	position: relative;
// 	padding-left: 25px;

// 	::before {
// 		content: ' ';
// 		position: absolute;
// 		left: 0;
// 		top: 10px;
// 		height: 1px;
// 		width: 20px;
// 		border-bottom: 1px solid rgb(4, 13, 20);
// 	}
// `
// const Companies = styled.ul`
// 	text-align: center;
// 	opacity: 0.4;

// 	li {
// 		margin: 2em 0;
// 	}
// `

export const query = graphql`
	query SITE_INDEX_QUERY {
		allMdx(
			sort: { fields: [frontmatter___date], order: DESC }
			filter: { frontmatter: { published: { eq: true } } }
			limit: 3
		) {
			nodes {
				id
				excerpt(pruneLength: 150)
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
