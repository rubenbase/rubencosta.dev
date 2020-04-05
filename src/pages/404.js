import React, { Component } from 'react'
import { Link } from 'gatsby'

import styled from '@emotion/styled'
import { css } from '@emotion/core'

import ResetCSS from 'components/atoms/reset-css'

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
						css={theme => css`
							padding: 0.8em;
							color: ${theme.colors.dark200};
							text-transform: uppercase;
							border: 1px dashed ${theme.colors.dark200};
							display: inline-block;
							transition: all 0.4s ease 0s;

							:hover {
								color: #ffffff !important;
								background: ${theme.colors.dark200};
								border-color: ${theme.colors.dark200};
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
	background-color: ${({ theme }) => theme.colors.primary};
	justify-content: center;
	align-items: center;
	flex-direction: column;
`
