/** @jsx jsx */
import React from 'react'
import ReactDOM from 'react-dom'

import cookie from 'react-cookies'

import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'

// components
import Hero from 'components/sections/hero'
import Wrapper from 'components/layouts/wrapper'
import ResetCSS from 'components/atoms/reset-css'

import arrowImg from '../images/arrow.svg'
import { colors } from 'styles'

const blogPosts = [
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

const portalRoot = document.getElementById('cookie-overlay')

class Portal extends React.Component {
	constructor() {
		super()
		this.el = document.createElement('div')
	}

	componentDidMount = () => {
		portalRoot.appendChild(this.el)
	}

	componentWillUnmount = () => {
		portalRoot.removeChild(this.el)
	}

	render() {
		const { children } = this.props
		return ReactDOM.createPortal(children, this.el)
	}
}

export default class IndexPage extends React.Component {
	state = {
		on: !cookie.load('gdpr_consent')
	}

	toggle = () => {
		// Create a new "on" state to mount the Portal component via the button
		this.setState({
			on: !this.state.on
		})
	}

	handleClick = () => {
		this.setState({
			on: !this.state.on
		})
		cookie.save('gdpr_consent', '1', { path: '/' })
	}

	render() {
		const { on } = this.state

		return (
			<>
				<ResetCSS />
				<Portal>
					{on ? (
						<div
							css={css`
								-webkit-box-align: center;
								align-items: center;
								bottom: 24px;
								box-shadow: rgba(0, 0, 0, 0.1) 0px 12px 24px;
								display: flex;
								position: fixed;
								z-index: 10;
								max-width: 50%;
								left: auto;
								right: 24px;
								background-color: rgb(255, 255, 255);
								color: rgb(4, 13, 20);
								padding: 12px 12px 12px 24px;
								border-radius: 8px;
								margin: auto;
							`}
						>
							<div
								css={css`
									margin-right: 36px;
								`}
							>
								<span
									css={css`
										font-family: 'Roboto', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
											Helvetica, Arial, sans-serif;
										font-size: 16px;
										font-style: normal;
										font-weight: 300;
										line-height: 19px;
										letter-spacing: normal;
										color: rgb(4, 13, 20);
										margin: 0px;
										text-decoration: unset;
									`}
								>
									We use cookies to provide you with the best experience and show you relevant
									advertising.
								</span>
								<a
									href="#"
									css={css`
										color: inherit;
										-webkit-text-decoration: none;
										text-decoration: none;
										display: unset;
										text-align: start;
									`}
								>
									<span
										css={css`
											font-family: 'Roboto', system-ui, -apple-system, BlinkMacSystemFont,
												'Segoe UI', Helvetica, Arial, sans-serif;
											font-size: 16px;
											font-style: normal;
											font-weight: 300;
											line-height: 19px;
											letter-spacing: normal;
											color: rgb(33, 206, 153);
											margin: 0px;
											text-decoration: unset;
										`}
									>
										{' '}
										Learn More
									</span>
								</a>
							</div>
							<button
								onClick={this.handleClick}
								css={css`
									background: none;
									border: 0;
									padding: 0;
									font: inherit;
									-webkit-appearance: none;
									display: -webkit-inline-box;
									display: -webkit-inline-flex;
									display: -ms-inline-flexbox;
									display: inline-flex;
									-webkit-align-items: center;
									-webkit-box-align: center;
									-ms-flex-align: center;
									align-items: center;
									-webkit-box-pack: center;
									-webkit-justify-content: center;
									-ms-flex-pack: center;
									justify-content: center;
									box-sizing: border-box;
									position: relative;
									overflow: hidden;
									white-space: nowrap;
									cursor: pointer;
									height: 44px;
									min-width: 76px;
									padding: 0 16px;
									border-radius: 8px;
									border-color: #21ce99;
									background-color: #21ce99;
								`}
							>
								<span
									css={css`
										position: absolute;
										top: 0;
										left: 0;
										bottom: 0;
										width: 0%;
										background-color: #18563e;
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
											font-family: 'Roboto', system-ui, -apple-system, BlinkMacSystemFont,
												'Segoe UI', Helvetica, Arial, sans-serif;
											font-size: 16px;
											font-style: normal;
											font-weight: 700;
											line-height: 18px;
											letter-spacing: normal;
											color: rgb(4, 13, 20);
											margin: 0px;
											text-decoration: unset;
										`}
									>
										I accept
									</span>
								</span>
							</button>
						</div>
					) : null}
				</Portal>
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
							{blogPosts.map(({ title, preview }) => (
								<Article>
									<h3>{title}</h3>
									<p>{preview}</p>
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
							<a
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
							</a>
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
const CarousalContainer = styled.div`
	padding: 0 1.5em 2em;
	max-width: 1230px;
	margin: 0 auto;
`
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
const Carousal = styled.ul`
	margin-bottom: 1em;

	li {
		background-color: rgb(247, 248, 252);
		padding: 1em;
		margin-bottom: 1em;
	}
`
const Blockquote = styled.blockquote`
	margin: 0;
	font-size: 0.8em;
	line-height: 1.8em;
	margin-bottom: 1em;
`
const Cite = styled.cite`
	color: #e379ff;
	font-weight: 0.8em;
	font-weight: bold;
	font-style: normal;
	position: relative;
	padding-left: 25px;

	::before {
		content: ' ';
		position: absolute;
		left: 0;
		top: 10px;
		height: 1px;
		width: 20px;
		border-bottom: 1px solid rgb(4, 13, 20);
	}
`
const Companies = styled.ul`
	text-align: center;
	opacity: 0.4;

	li {
		margin: 2em 0;
	}
`
