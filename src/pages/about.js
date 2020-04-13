import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

import styled from '@emotion/styled'
import { css } from '@emotion/core'

import ResetCSS from 'components/atoms/reset-css'
import BasicTemplate from 'components/templates/basic-template'
import Wrapper from 'components/layouts/wrapper'

import { Flex, Box, Button, Text, Heading } from 'theme-ui'

export default class About extends Component {
	render() {
		return (
			<>
				<ResetCSS />
				<BasicTemplate title="About Me" subtitle=" ">
					<AboutContainer>
						<Wrapper>
							<div
								css={css`
									display: flex;
									flex-direction: column;
									-webkit-box-pack: justify;
									-webkit-box-align: center;
									@media (min-width: 768px) {
										flex-direction: row;
									}
								`}
							>
								<div
									css={css`
										width: 100%;
										margin-bottom: 2em;
										order: 2;
										flex: 1;
										margin-top: 2em;
										@media (min-width: 768px) {
											margin-top: 0em;
											padding: 0 5%;
											order: 1;
											width: 60%;
											max-width: 480px;
										}
									`}
								>
									<Text
										sx={{
											fontSize: 2
										}}
									>
										<Heading
											css={css`
												display: block;
												margin-bottom: 1em;
												font-size: 2em;
											`}
										>
											👋 Hello!
										</Heading>
										<span>
											<b>I'm Ruben Costa</b>, a software developer based in <b>London, UK</b> who
											enjoys building things that live on the internet. I develop exceptional
											websites and web apps that provide intuitive, pixel-perfect user interfaces
											with efficient and modern backends.
										</span>
										<span
											css={css`
												display: block;
												margin-top: 1em;
											`}
										>
											Shortly after finishing my CS studies, I started working as a full-stack
											developer in a startup, moved to building my own company (15+ employees &
											~600k in sales on the 1<sup>st</sup> year) and now transitioned to enterprise,
											working on a wide variety of interesting and meaningful projects on a daily
											basis. Here are a few technologies I've been working with recently:
										</span>
									</Text>
									<LatestTechs>
										<LatestTechsItem>React</LatestTechsItem>
										<LatestTechsItem>Node.js</LatestTechsItem>
										<LatestTechsItem>Redis</LatestTechsItem>
										<LatestTechsItem>PostgreSQL</LatestTechsItem>
										<LatestTechsItem>AWS</LatestTechsItem>
										<LatestTechsItem>Rust</LatestTechsItem>
									</LatestTechs>
								</div>
								<div
									css={css`
										/* margin-left: 60px; */
										display: flex;
										flex: 1;
										padding: 0 10%;
										justify-content: center;
										align-items: center;
										order: 1;
										@media (min-width: 768px) {
											order: 2;
											max-height: 400px;
											width: 40%;
											padding: 0 5%;
										}
										::after {
											top: 20px;
											left: 20px;
											z-index: -1;
											border-width: 2px;
											border-style: solid;
											border-color: rgb(100, 255, 218);
											border-image: initial;
										}
									`}
								>
									<div
										css={css`
											position: relative;
											width: 100%;
											@media (min-width: 768px) {
												margin-top: 150px;
											}
										`}
									>
										<Img
											css={css`
												width: 100%;
											`}
											fluid={this.props.data.file.childImageSharp.fluid}
											alt="This is a picture of my face."
										/>
										<div
											css={css`
												position: absolute;
												width: 100%;
												height: 100%;
												/* box-shadow: inset 3px 3px 10px 0 #000000; */
												/* border-radius: 20px; */
												top: 0;
												left: 0;
												background: linear-gradient(
													to bottom,
													rgba(0, 0, 0, 0) 60%,
													rgba(0, 0, 0, 1) 90%
												);
											`}
										>
											<Heading
												css={css`
													position: absolute;
													bottom: 15%;
													left: 1em;
												`}
											>
												Los Angeles
											</Heading>
										</div>
									</div>
								</div>
							</div>

							{/* <Button mr={2}>Beep</Button> */}
						</Wrapper>
					</AboutContainer>
				</BasicTemplate>
			</>
		)
	}
}

const AboutContainer = styled.div`
	background-color: ${({ theme }) => theme.colors.black};
	color: white;
	padding: 2em 0;
`

const LatestTechs = styled.ul`
	display: grid;
	grid-template-columns: repeat(2, minmax(140px, 200px));
	overflow: hidden;
	padding: 0px;
	margin: 20px 0px 0px;
	list-style: none;
	color: #21ce99;
`
const LatestTechsItem = styled.li`
	position: relative;
	padding-left: 20px;
	font-size: 0.9em;
	font-weight: 700;
	::before {
		content: '▹';
		position: absolute;
		top: 25%;
		left: 0px;
		color: #21ce99;
		font-size: 18px;
		line-height: 12px;
	}
`

export const query = graphql`
	query {
		file(relativePath: { eq: "about-me.png" }) {
			childImageSharp {
				fluid(maxWidth: 600) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
	}
`
