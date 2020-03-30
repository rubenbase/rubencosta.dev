import React from 'react'
import styled from '@emotion/styled'

// components
import Hero from 'components/sections/hero'
import Wrapper from 'components/layouts/wrapper'
import ResetCSS from 'components/atoms/reset-css'

import arrowImg from '../images/arrow.svg'

export default class IndexPage extends React.Component {
	render() {
		console.log(this.props)
		return (
			<>
				<ResetCSS />
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
					<CarousalContainer>
						<img src={arrowImg} id="right-arrow" alt="Move testimonials to the right" />
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
						<img src={arrowImg} id="right-arrow" alt="Move testimonials to the right" />
					</CarousalContainer>
				</SecondSection>

				<Wrapper>
					<h2>Deserunt tempor commodo occaecat eu...</h2>
					<Companies>
						<li>
							<img src="images/company1.svg" alt="company1" className="company1" />
							<img src="images/company2.svg" alt="company2" className="company2" />
							<img src="images/company1.svg" alt="company1" className="company1" />
							<img src="images/company2.svg" alt="company2" className="company2" />
						</li>
					</Companies>
				</Wrapper>
			</>
		)
	}
}

const SecondSection = styled.div`
	background-color: #351f3a;
`
const Stats = styled.ul`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
	justify-content: space-around;
	margin-top: 2em;

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
const Carousal = styled.ul`
	margin-bottom: 1em;

	li {
		background-color: #422847;
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
		border-bottom: 1px solid white;
	}
`
const Companies = styled.ul``
