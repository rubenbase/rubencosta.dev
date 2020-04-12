import React from 'react'
import { NavbarIsOpenProvider } from 'context/navbar-context'
import Hero from 'components/sections/hero'

export default function BasicTemplate(props) {
	return (
		<NavbarIsOpenProvider>
			<Hero align={props.align} title={props.title} subtitle={props.subtitle} />
			{props.children}
		</NavbarIsOpenProvider>
	)
}
