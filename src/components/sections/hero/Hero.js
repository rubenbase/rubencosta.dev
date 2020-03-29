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
						<header>
							<Logo href="#">RubenCosta</Logo>
							<nav>
								<ul>
									<li>
										<a href="#">Home</a>
									</li>
									<li>
										<a href="#">About</a>
									</li>
									<li>
										<a href="#">Contact</a>
									</li>
								</ul>
							</nav>
						</header>
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
	background: url(${background}) rgba(180, 0, 163, 0.95);
	background-size: cover;
	background-blend-mode: multiply;
`

const Logo = styled.a``
const HeroContent = styled.div``
const Subtitle = styled.p``
