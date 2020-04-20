import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

import styled from '@emotion/styled'
import { css } from '@emotion/core'

import ResetCSS from 'components/atoms/reset-css'
import BasicTemplate from 'components/templates/basic-template'
import Wrapper from 'components/layouts/wrapper'

import { Flex, Box, Button, Text, Heading } from 'theme-ui'
import Tabs from 'components/organisms/tabs'

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
										margin: 2em 0;
										order: 2;
										flex: 1;
										margin-top: 2em;
										@media (min-width: 768px) {
											padding: 0 2% 0 0;
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
											I'm <b>Ruben Costa</b>, a software developer based in <b>London, UK</b> who
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
										display: flex;
										flex: 1;
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
											height: 390px;
											@media (min-width: 768px) {
												height: auto;
												margin-top: 150px;
											}
										`}
									>
										<Img
											css={css`
												width: 100%;
												height: 100%;
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
													bottom: 10%;
													left: 1em;
												`}
											>
												24
												<br />
												<span
													css={css`
														font-size: 1.2em;
													`}
												>
													Spain 🇪🇸
												</span>
											</Heading>
										</div>
									</div>
								</div>
							</div>

							{/* <Button mr={2}>Beep</Button> */}
						</Wrapper>
					</AboutContainer>
					<ExperienceContainer>
						<Wrapper>
							<Section>
								<h2
									css={css`
										text-align: center;
										position: relative;
										margin: 2em 0;
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
									My Experience
								</h2>
								<div
									css={css`
										display: flex;
										align-items: flex-start;
										position: relative;
									`}
								>
									<Tabs
										activeTab={{
											id: 'tab1'
										}}
									>
										<Tabs.Tab id="tab1" title="Vodafone">
											Vodafone
										</Tabs.Tab>
										<Tabs.Tab id="tab2" title="Hack a BOS">
											Hack a BOS
										</Tabs.Tab>
										<Tabs.Tab id="tab3" title="Blue Ocean Start">
											Blue Ocean Start
										</Tabs.Tab>
										<Tabs.Tab id="tab4" title="Domesting">
											Domesting
										</Tabs.Tab>
									</Tabs>
								</div>
							</Section>
						</Wrapper>
					</ExperienceContainer>
				</BasicTemplate>
			</>
		)
	}
}

const AboutContainer = styled.div`
	background-color: ${({ theme }) => theme.colors.black};
	color: white;
	padding: 2em 0 3em 0;

	@media (min-width: 1115px) {
		padding-bottom: 7em;
	}
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

const ExperienceContainer = styled.div`
	background-color: ${({ theme }) => theme.colors.light2};
	color: ${({ theme }) => theme.colors.dark1};
	padding: 2em 0;
`

const Section = styled.section`
	position: relative;
	max-width: 700px;
	margin: 0px auto;
`

const ExperienceList = styled.ul`
	display: block;
	position: relative;
	width: max-content;
	/* background-color: ${({ theme }) => theme.colors.black}; */
	padding: 1em 0;
	margin: 0px;
	list-style: none;
`
const ExperienceItem = styled.li`
	background-color: ${({ theme }) => theme.colors.black};
	margin: 0;
	height: 65px;
`
const CompanyButton = styled.button`
	text-decoration-skip-ink: auto;
	position: relative;
	cursor: pointer;
	display: flex;
	-webkit-box-align: center;
	align-items: center;
	width: 100%;
	height: 100%;
	text-align: left;
	white-space: nowrap;
	font-size: 1em;
	color: ${({ theme }) => theme.colors.white};
	text-decoration: none;
	padding: 3px 20px 3px;
	transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
	border: none;
	background-color: transparent;
	&:hover {
		background-color: ${({ theme }) => theme.colors.primary};
		color: ${({ theme }) => theme.colors.black};
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
