import React, { Component } from 'react'
import styled from '@emotion/styled'

import background from '../../../images/gatsby-astronaut.png'
import Wrapper from 'components/layouts/wrapper'
// import Image from 'components/atoms/image'

export default class Hero extends Component {
	render() {
		return (
			<>
				<HeroWrapper>
					<Wrapper>
						<Header>
							<Logo href="#">RubenCosta</Logo>
							<Nav>
								<li>
									<a href="#">Home</a>
								</li>
								<li>
									<a href="#">About</a>
								</li>
								<li>
									<a href="#">Contact</a>
								</li>
							</Nav>
						</Header>
						<HeroContent>
							<h1>Do dolor cillum et commodo aute amet ex labore.</h1>
							<Subtitle>Teaching UI/UX &amp; Frontend Development</Subtitle>
						</HeroContent>
					</Wrapper>
				</HeroWrapper>
			</>
		)
	}
}

const HeroWrapper = styled.div`
	background: url(${background}) rgba(212, 31, 255, 0.99);
	background-size: cover;
	background-blend-mode: color-burn;
`

const Header = styled.header`
	display: flex;
	justify-content: space-between;
`
const Logo = styled.a`
	font-weight: bold;
	font-family: 'Impact';
	font-size: 26px;
`
const Nav = styled.ul`
	display: flex;

	li a {
		padding: 0 0.6em;
	}
`
const HeroContent = styled.div`
	margin: 4em 0 2em;

	& h1 {
		margin: 0.67em 0;
	}
`
const Subtitle = styled.p`
	margin-bottom: 0;
`
