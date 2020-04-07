import React from 'react'
import {
	NavbarIsOpenProvider,
	useNavbarIsOpenState,
	useNavbarIsOpenDispatch
} from 'context/navbar-context'
import NavbarDrawer from 'components/organisms/navbar-drawer'
import Hero from 'components/sections/hero'

export default function BasicTemplate({ children }) {
	return (
		<NavbarIsOpenProvider>
			<Hero />
			{children}
		</NavbarIsOpenProvider>
	)
}
