import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import Loadable from '@loadable/component'
import { css } from '@emotion/core'
import NavbarToggleButton from 'components/atoms/navbar-toggle-button'

import { useNavbarIsOpenState, useNavbarIsOpenDispatch } from 'context/navbar-context'

const NavbarDrawer = Loadable(() => import('components/organisms/navbar-drawer'))

export default function Navbar() {
	const { isOpen } = useNavbarIsOpenState()

	return (
		<>
			<Logo to="/">rubencosta</Logo>
			<Nav>
				<li>
					<StyledLink to="/blog">Blog</StyledLink>
				</li>
				<li>
					<StyledLink to="/about">About</StyledLink>
				</li>
				<li>
					<a
						css={theme => css`
							color: ${theme.colors.dark100};
						`}
						href="https://github.com/rubenbase"
						target="_blank"
					>
						Github
					</a>
				</li>
			</Nav>

			<NavbarDrawer isOpen={isOpen}>
				<NavbarDrawerListItem>
					<StyledLink to="/blog">Blog</StyledLink>
				</NavbarDrawerListItem>
				<NavbarDrawerListItem>
					<StyledLink to="/about">About</StyledLink>
				</NavbarDrawerListItem>
				<NavbarDrawerListItem>
					<a
						css={theme => css`
							color: ${theme.colors.dark100};
							opacity: 0.5;
							&:hover {
								opacity: 1;
							}
						`}
						href="https://github.com/rubenbase"
						target="_blank"
					>
						Github
					</a>
				</NavbarDrawerListItem>
			</NavbarDrawer>
			<NavbarToggleButton />
		</>
	)
}

export const NavbarDrawerListItem = styled.li`
	color: ${({ theme }) => theme.colors.dark100};
	margin-bottom: 3em;
	font-family: 'Roboto';
	font-weight: 500;
	font-size: 26px;
`
export const Logo = styled(Link)`
	/* font-weight: bold; */
	color: ${({ theme }) => theme.colors.dark100};
	font-family: 'Roboto';
	font-weight: 500;
	font-size: 26px;
`
export const StyledLink = styled(Link)`
	color: ${({ theme }) => theme.colors.dark100};
	opacity: 0.5;
	&:hover {
		opacity: 1;
	}
`

const Nav = styled.ul`
	display: none;

	@media (min-width: 599px) {
		display: flex;
		li a {
			color: ${({ theme }) => theme.colors.dark100};
			font-size: 1.2em;
			padding: 0 0.6em;
		}
	}
`
