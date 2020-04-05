import React from 'react'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import styled from '@emotion/styled'
import Hero from 'components/sections/hero'
import { css } from '@emotion/core'

export default ({ data, pageContext }) => {
	const { frontmatter, body } = data.mdx
	const { previous, next } = pageContext

	return (
		<>
			<Hero align="center" title={frontmatter.title} subtitle=" " />
			<PostWrapper>
				<div
					css={css`
						max-width: 748px;
						margin: 0 auto;
						padding: 0 2em;
						margin-bottom: 5em;
					`}
				>
					<MetadataContainer>
						<p>{frontmatter.date}</p>
					</MetadataContainer>

					<MDXRenderer>{body}</MDXRenderer>
				</div>
			</PostWrapper>
			<div
				css={css`
					max-width: 748px;
					margin: 0 auto;
					padding: 0 2em;
					margin-bottom: 5em;
				`}
			>
				<AuthorContainer>
					<div
						css={theme => css`
							/* background-color: ${theme.colors.dark200}; */
							width: 100%;
							padding: 1em;
							/* color: white; */
							padding-top:3em;
							border-bottom: .5px solid #aaa;
							color: ${theme.colors.dark200};
							& h2 {
								margin-bottom: 0.5em;
							}
						`}
					>
						<div
							css={css`
								display: flex;
								flex-direction: column;
							`}
						>
							<h2>Never miss out</h2>
							<p>Stay tuned with our weekly recap of what’s hot & cool!</p>
						</div>
						<form
							css={css`
								position: relative;
								display: flex;
								-webkit-box-align: stretch;
								align-items: stretch;
								flex-direction: column;
								-webkit-box-pack: center;
								justify-content: center;
								width: 100%;
								visibility: visible;
							`}
						>
							<div
								css={css`
									-webkit-align-items: center;
									-webkit-box-align: center;
									-ms-flex-align: center;
									-webkit-align-items: center;
									-webkit-box-align: center;
									-ms-flex-align: center;
									align-items: center;
									background: #f7f8fc;
									border-radius: 8px;
									box-sizing: border-box;
									cursor: text;
									display: -webkit-box;
									display: -webkit-flex;
									display: -ms-flexbox;
									display: -webkit-box;
									display: -webkit-flex;
									display: -ms-flexbox;
									display: flex;
									height: 64px;
									padding-right: 12px;
								`}
							>
								<input
									css={theme => css`
										font-family: 'Maison Neue', system-ui, -apple-system, BlinkMacSystemFont,
											'Segoe UI', Helvetica, Arial, sans-serif;
										font-size: 16px;
										font-style: normal;
										font-weight: 300;
										line-height: 19px;
										-webkit-letter-spacing: -0.32px;
										-moz-letter-spacing: -0.32px;
										-ms-letter-spacing: -0.32px;
										letter-spacing: -0.32px;
										box-sizing: border-box;
										color: ${theme.colors.dark200};
										background-color: transparent;
										height: 100%;
										-webkit-box-flex: 1;
										-webkit-box-flex: 1;
										-webkit-flex-grow: 1;
										-ms-flex-positive: 1;
										flex-grow: 1;
										margin-right: 12px;
										min-width: 0px;
										-webkit-text-decoration: unset;
										text-decoration: unset;
										border-width: initial;
										border-style: none;
										border-color: initial;
										border-image: initial;
										padding: 0px 0px 0px 24px;
									`}
								/>
								<div
									css={css`
										flex-shrink: 0;
									`}
								>
									<button
										css={css`
											-webkit-appearance: none;
											display: -webkit-inline-box;
											display: -webkit-inline-flex;
											display: -ms-inline-flexbox;
											display: inline-flex;
											-webkit-box-align: center;
											-webkit-align-items: center;
											-webkit-box-align: center;
											-ms-flex-align: center;
											align-items: center;
											-webkit-box-pack: center;
											-webkit-box-pack: center;
											-webkit-justify-content: center;
											-ms-flex-pack: center;
											justify-content: center;
											box-sizing: border-box;
											position: relative;
											-webkit-writing-mode: horizontal-tb !important;
											text-rendering: auto;
											white-space: nowrap;
											cursor: pointer;
											height: 44px;
											min-width: 76px;
											background: none rgb(36, 42, 45);
											border-width: 0px;
											border-style: initial;
											border-image: initial;
											font: inherit;
											text-align: center;
											overflow: hidden;
											padding: 0px 16px;
											border-radius: 8px;
											border-color: rgb(36, 42, 45);
										`}
									>
										<span
											css={css`
												position: absolute;
												top: 0;
												left: 0;
												bottom: 0;
												width: 0%;
												background-color: #000000;
												-webkit-transition: width 300ms;
												-webkit-transition: width 300ms;
												transition: width 300ms;
											`}
										></span>
										<span
											css={css`
												position: relative;
												visibility: inherit;
											`}
										>
											<span
												css={css`
													font-family: 'Maison Neue', system-ui, -apple-system, BlinkMacSystemFont,
														'Segoe UI', Helvetica, Arial, sans-serif;
													font-size: 16px;
													font-style: normal;
													font-weight: 700;
													line-height: 18px;
													-webkit-letter-spacing: normal;
													-moz-letter-spacing: normal;
													-ms-letter-spacing: normal;
													letter-spacing: normal;
													color: rgb(255, 255, 255);
													margin: 0px;
													-webkit-text-decoration: unset;
													text-decoration: unset;
												`}
											>
												Get Early Access
											</span>
										</span>
									</button>
								</div>
							</div>
						</form>
					</div>
				</AuthorContainer>
				<MoreContentSection>
					{previous === false ? null : (
						<>
							{previous ? (
								<NavButtonContainer>
									<h4
										css={css`
											margin-bottom: 0.5em;
										`}
									>
										Previous article
									</h4>
									<NavButton>
										<Link to={'/blog' + previous.fields.slug}>{previous.frontmatter.title}</Link>
									</NavButton>
								</NavButtonContainer>
							) : (
								<h4
									css={css`
										margin-bottom: 0.5em;
									`}
								>
									No older posts
								</h4>
							)}
						</>
					)}
					{next === false ? null : (
						<>
							{next ? (
								<NavButtonContainer>
									<h4
										css={css`
											margin-bottom: 0.5em;
										`}
									>
										Next article
									</h4>
									<NavButton>
										<Link to={'/blog' + next.fields.slug}>{next.frontmatter.title}</Link>
									</NavButton>
								</NavButtonContainer>
							) : (
								<h4
									css={css`
										margin-bottom: 0.5em;
									`}
								>
									No newer articles
								</h4>
							)}
						</>
					)}
				</MoreContentSection>
			</div>
		</>
	)
}

const AuthorContainer = styled.section`
	display: flex;
`
const NavButtonContainer = styled.section`
	display: flex;
	flex-direction: column;
	margin-top: 1.5em;
`
const MoreContentSection = styled.section`
	flex-direction: column;
	margin-top: 1em;

	@media (min-width: 900px) {
		display: flex;
		flex-direction: row;
		max-width: 680px;
		/* padding: 1em 1.5em; */
		justify-content: space-between;
		align-items: center;
	}
`
const NavButton = styled.section`
	display: flex;
	justify-content: center;
	padding: 1em;
	align-items: center;
	background-color: #21ce99;
`

const PostWrapper = styled.section`
	background-color: ${({ theme }) => theme.colors.light1};
	padding-bottom: 1em;
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
