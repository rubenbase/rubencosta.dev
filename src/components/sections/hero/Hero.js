import React, { Component } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { Link } from 'gatsby'
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
							<Logo to="/">rubencosta</Logo>
							<Nav>
								<li>
									<Link to="/blog">Blog</Link>
								</li>
								<li>
									<Link to="/">Experience</Link>
								</li>
								<li>
									<a href="https://github.com/rubenbase">Github</a>
								</li>
							</Nav>
						</Header>
						<HeroContent>
							<h1
								css={css`
									text-align: ${this.props.align ? this.props.align : 'left'};
									line-height: 1.4em;
									font-size: 3em;
									margin: 0.67em 0;
								`}
							>
								{this.props.title || 'I Build Awesome Experiences Through Quality Software'}
							</h1>
							<Subtitle>{this.props.subtitle || 'Cloud & Software Developer'}</Subtitle>
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
const Logo = styled(Link)`
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
`
const Subtitle = styled.p`
	font-size: 1.4em;
	font-family: 'Roboto';
	font-weight: 300;
	margin-bottom: 0;
`
