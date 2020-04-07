import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

import NavbarToggleButton from 'components/atoms/navbar-toggle-button'
import NavbarDrawer from 'components/organisms/navbar-drawer'
import { useNavbarIsOpenState, useNavbarIsOpenDispatch } from 'context/navbar-context'

export default function Navbar() {
	const { isOpen } = useNavbarIsOpenState()
	const dispatch = useNavbarIsOpenDispatch()
	return (
		<>
			<div>
				<NavbarDrawer
					closable={true}
					visible={isOpen}
					onClose={() => dispatch({ type: 'toggleIsOpen' })}
				>
					<h1>Hellooooo</h1>
					<h1>Hellooooo</h1>
					<h1>Hellooooo</h1>
				</NavbarDrawer>
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
