import React from 'react'
import styled from '@emotion/styled'

export default function NavbarToggleButton() {
	return (
		<ToggleButton>
			<ToggleButtonLine />
			<ToggleButtonLine />
			<ToggleButtonLine />
		</ToggleButton>
	)
}

const ToggleButton = styled.button`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	height: 23px;
	margin: 3px;
	background-color: transparent;
	border: none;
	cursor: pointer;
	box-sizing: border-box;
	padding: 0;
`

const ToggleButtonLine = styled.div`
	width: 30px;
	height: 2px;
	background-color: ${({ theme }) => theme.colors.black};
`
