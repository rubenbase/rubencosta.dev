import React, { Component } from 'react'
import styled from '@emotion/styled'

import Wrapper from 'components/layouts/wrapper'

// import Image from 'components/atoms/image'
import background from '../../../images/gatsby-astronaut.png'
import { colors } from 'styles'

export default class Hero extends Component {
	render() {
		return (
			<>
				<HeroWrapper>
					<Wrapper>
						<Header>
							<Logo href="#">rubencosta</Logo>
							<Nav>
								<li>
									<a href="#">Blog</a>
								</li>
								{/* <li>
									<a href="#">About</a>
								</li> */}
								<li>
									<a href="https://github.com/rubenbase">Github</a>
								</li>
							</Nav>
						</Header>
						<HeroContent>
							<h1>I Build Awesome Experiences Through Quality Software</h1>
							<Subtitle>Cloud &amp; Software Developer</Subtitle>
						</HeroContent>
					</Wrapper>
				</HeroWrapper>
			</>
		)
	}
}

const HeroWrapper = styled.div`
	/* background: url(${background}) rgba(212, 31, 255, 0.99);
	background-size: cover;
  background-blend-mode: color-burn; */
  background-color: ${colors.primary};
`

const Header = styled.header`
	display: flex;
	justify-content: space-between;
`
const Logo = styled.a`
	/* font-weight: bold; */
	font-family: 'Roboto';
	font-weight: 500;
	font-size: 26px;
`
const Nav = styled.ul`
	display: flex;

	li a {
		font-size: 1.2em;
		padding: 0 0.6em;
	}
`
const HeroContent = styled.div`
	margin: 4em 0 2em;

	& h1 {
		line-height: 1.4em;
		font-size: 3em;
		margin: 0.67em 0;
	}
`
const Subtitle = styled.p`
	font-size: 1.4em;
	font-family: 'Roboto';
	font-weight: 300;
	margin-bottom: 0;
`
