import React, { Component } from 'react'
import { Link } from 'gatsby'

import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'

import ResetCSS from 'components/atoms/reset-css'
import { colors } from 'styles'

export default class NotFound extends Component {
	render() {
		return (
			<>
				<ResetCSS />
				<Page404Container>
					<h1>404</h1>
					<h2>Oops! Looks like this page doesn't exist</h2>
					<Link
						role="button"
						to="/"
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
						Go back
					</Link>
				</Page404Container>
			</>
		)
	}
}

const Page404Container = styled.section`
	display: flex;
	height: 100vh;
	background-color: ${colors.primary};
	justify-content: center;
	align-items: center;
	flex-direction: column;
`
