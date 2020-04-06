import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

import NavbarToggleButton from 'components/atoms/navbar-toggle-button'

export default function Navbar() {
	return (
		<>
			<div>
				<NavbarToggleButton />
			</div>
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
		</>
	)
}

const Logo = styled(Link)`
	/* font-weight: bold; */
	color: ${({ theme }) => theme.colors.black};
	font-family: 'Roboto';
	font-weight: 500;
	font-size: 26px;
`

const Nav = styled.ul`
	display: flex;

	li a {
		color: ${({ theme }) => theme.colors.black};
		font-size: 1.2em;
		padding: 0 0.6em;
	}
`
