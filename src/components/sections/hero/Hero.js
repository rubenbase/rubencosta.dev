import React, { Component } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import Wrapper from 'components/layouts/wrapper'

// import Image from 'components/atoms/image'
import background from '../../../images/gatsby-astronaut.png'
import Navbar from 'components/molecules/navbar'

export default class Hero extends Component {
	render() {
		return (
			<>
				<HeroWrapper>
					<Wrapper>
						<Header>
							<Navbar />
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
	background-color: ${({ theme }) => theme.colors.primary};
`

const Header = styled.header`
	display: flex;
	justify-content: space-between;
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
