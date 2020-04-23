import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'gatsby'
import { Logo } from 'components/molecules/navbar/Navbar'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import NavbarToggleButton from 'components/atoms/navbar-toggle-button'

class NavbarDrawer extends React.Component {
	state = {
		open: this.props.isOpen
	}

	toggle = () => {
		this.setState({
			open: !this.state.open
		})
	}

	handleClick = () => {
		this.setState({
			open: !this.state.open
		})
	}

	render() {
		const { isOpen } = this.props
		const modalMarkup = (
			<ModalBackground open={isOpen}>
				<ModalHeader>
					<Logo to="/">rubencosta</Logo>
					<NavbarToggleButton />
				</ModalHeader>
				<ModalContent>
					<ModalList>{this.props.children}</ModalList>
				</ModalContent>
				<ModalFooter>
					{/* <FaGithub size={32} /> */}
					<a
						href="https://www.linkedin.com/in/rubencostam"
						target="_blank"
						css={theme => css`
							color: ${theme.colors.dark100};
							cursor: pointer;
							text-decoration: underline;
						`}
					>
						<FaLinkedin size={32} />
					</a>
				</ModalFooter>
			</ModalBackground>
		)

		return ReactDOM.createPortal(modalMarkup, document.body)
	}
}

const ModalFooter = styled.ul`
	margin: 0;
	height: 68px;
	display: flex;
	flex-direction: row-reverse;
	align-items: center;
`
const ModalList = styled.ul`
	margin: 0;
`
const ModalContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	padding-top: 3em;
	height: 100%;
`
const ModalHeader = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	justify-content: space-between;
`
const ModalBackground = styled.div`
	bottom: 0;
	right: 0;
	height: 100%;
	width: 100%;
	position: fixed;
	display: flex;
	flex-direction: column;
	z-index: 10;
	background-color: ${({ theme }) => theme.colors.light1};
	color: ${({ theme }) => theme.colors.dark100};
	padding: 1em;
	margin: auto;
	transition: transform 0.3s ease-in-out;
	${({ open }) => `transform: translateY(${open ? '0' : '100'}%);`}
`
export default NavbarDrawer
