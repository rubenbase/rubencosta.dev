import React, { Component } from 'react'

import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'

import ResetCSS from 'components/atoms/reset-css'
import { colors } from 'styles'
import Hero from 'components/sections/hero'
import Wrapper from 'components/layouts/wrapper'

const blogPosts = [
	{
		title: 'Replace axios with a simple custom fetch wrapper',
		preview:
			"Axios can do a ton of stuff, but here's a simpler solution that can handle most use cases"
	},
	{
		title: 'How to test custom React hooks',
		preview: 'Get confidence your custom React hooks work properly with solid tests.'
	},
	{
		title: 'Replace axios with a simple custom fetch wrapper',
		preview:
			"Axios can do a ton of stuff, but here's a simpler solution that can handle most use cases"
	},
	{
		title: 'How to test custom React hooks',
		preview: 'Get confidence your custom React hooks work properly with solid tests.'
	},
	{
		title: 'Replace axios with a simple custom fetch wrapper',
		preview:
			"Axios can do a ton of stuff, but here's a simpler solution that can handle most use cases"
	},
	{
		title: 'How to test custom React hooks',
		preview: 'Get confidence your custom React hooks work properly with solid tests.'
	}
]

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
							{/* <ul > /</ul> */}
							{blogPosts.map(({ title, preview }) => (
								<Card>
									<ImagePlaceholder />
									<h4
										css={css`
											margin: 1em 0;
										`}
									>
										<a href="/blog/post"> {title}</a>
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
											6 min ago
										</span>
									</div>
								</Card>
							))}
						</ul>
						{/* </div> */}
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
	background-color: ${colors.light1};
	padding: 2em 0;
`