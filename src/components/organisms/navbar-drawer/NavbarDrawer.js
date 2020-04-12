import React from 'react'
import Portal from 'components/atoms/portal'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import RcDrawer from 'rc-drawer'

export default class NavbarDrawer extends React.Component {
	parentDrawer = null
	destroyClose = false

	state = {
		push: false
	}

	componentDidMount() {
		const { visible } = this.props
		if (visible && this.parentDrawer) {
			this.parentDrawer.push()
		}
	}

	componentDidUpdate(preProps) {
		const { visible } = this.props
		if (preProps.visible !== visible && this.parentDrawer) {
			if (visible) {
				this.parentDrawer.push()
			} else {
				this.parentDrawer.pull()
			}
		}
	}

	componentWillUnmount() {
		if (this.parentDrawer) {
			this.parentDrawer.pull()
			this.parentDrawer = null
		}
	}

	push = () => {
		this.setState({
			push: true
		})
	}

	pull = () => {
		this.setState({
			push: false
		})
	}

	onDestroyTransitionEnd = () => {
		const isDestroyOnClose = this.getDestroyOnClose()
		if (!isDestroyOnClose) {
			return
		}
		if (!this.props.visible) {
			this.destroyClose = true
			this.forceUpdate()
		}
	}

	getDestroyOnClose = () => this.props.destroyOnClose && !this.props.visible

	renderHeader() {
		const { title, prefixCls, closable, headerStyle } = this.props
		if (!title && !closable) {
			return null
		}

		return (
			<div style={headerStyle}>
				{title && <div>{title}</div>}
				{closable && this.renderCloseIcon()}
			</div>
		)
	}

	renderFooter() {
		const { footer, footerStyle, prefixCls } = this.props
		if (!footer) {
			return null
		}

		return <div>{footer}</div>
	}

	renderCloseIcon() {
		const { closable, prefixCls, onClose } = this.props
		return (
			closable && (
				// eslint-disable-next-line react/button-has-type
				<button onClick={onClose} aria-label="Close" className={`${prefixCls}-close`}>
					<span>close</span>
				</button>
			)
		)
	}

	renderBody = () => {
		const { bodyStyle, drawerStyle, prefixCls, visible } = this.props
		if (this.destroyClose && !visible) {
			return null
		}
		this.destroyClose = false

		const containerStyle = {}

		const isDestroyOnClose = this.getDestroyOnClose()

		if (isDestroyOnClose) {
			// Increase the opacity transition, delete children after closing.
			containerStyle.opacity = 0
			containerStyle.transition = 'opacity .3s'
		}

		return (
			<div
				style={{
					...containerStyle,
					...drawerStyle
				}}
				onTransitionEnd={this.onDestroyTransitionEnd}
			>
				{this.renderHeader()}
				<div style={bodyStyle}>{this.props.children}</div>
				{this.renderFooter()}
			</div>
		)
	}

	// render Provider for Multi-level drawer
	renderProvider = value => {
		const { prefixCls, placement, className, width, height, mask, direction, ...rest } = this.props
		const haveMask = mask ? '' : 'no-mask'
		this.parentDrawer = value
		const offsetStyle = {}
		if (placement === 'left' || placement === 'right') {
			offsetStyle.width = width
		} else {
			offsetStyle.height = height
		}
		// const drawerClassName = classNames(className, haveMask, {
		// 	[`${prefixCls}-rtl`]: direction === 'rtl'
		// })
		return (
			// <DrawerContext.Provider value={this}>
			// <RcDrawer
			// 	handler={false}
			// 	// {...omit(rest, [
			// 	// 	'zIndex',
			// 	// 	'style',
			// 	// 	'closable',
			// 	// 	'destroyOnClose',
			// 	// 	'drawerStyle',
			// 	// 	'headerStyle',
			// 	// 	'bodyStyle',
			// 	// 	'footerStyle',
			// 	// 	'footer',
			// 	// 	'locale',
			// 	// 	'title',
			// 	// 	'push',
			// 	// 	'visible',
			// 	// 	'getPopupContainer',
			// 	// 	'rootPrefixCls',
			// 	// 	'getPrefixCls',
			// 	// 	'renderEmpty',
			// 	// 	'csp',
			// 	// 	'pageHeader',
			// 	// 	'autoInsertSpaceInButton'
			// 	// ])}
			// 	// {...offsetStyle}
			// 	prefixCls={prefixCls}
			// 	// open={this.props.visible}
			// 	// getContainer={document.getElementById('navbar-overlay')}
			// 	// showMask={mask}
			// 	// placement={placement}
			// 	// style={this.getRcDrawerStyle()}
			// 	// className={drawerClassName}
			// >
			// 	{this.renderBody()}
			// 	{/* <Navbar>
			// 		<ul css={{ margin: '0' }}>
			// 			<li>
			// 				<a>Example1</a>
			// 			</li>
			// 			<li>
			// 				<a>Example2</a>
			// 			</li>
			// 		</ul>
			// 	</Navbar> */}
			// 	{/* </DrawerContext.Provider> */}
			// </RcDrawer>
			<div className="sidebar">
				<nav className="menu">
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#">About</a>
					</li>
					<li>
						<a href="#">Services</a>
					</li>
					<li>
						<a href="#">Pricing</a>
					</li>
					<li>
						<a href="#">Contact</a>
					</li>
					<li>
						<a href="#">Blog</a>
					</li>
				</nav>
			</div>
		)
	}

	render() {
		return (
			<Portal name="navbar-overlay">
				<div
					css={css`
						-webkit-box-align: center;
						align-items: center;
						bottom: 24px;
						box-shadow: rgba(0, 0, 0, 0.1) 0px 12px 24px;
						display: flex;
						position: fixed;
						z-index: 10;
						max-width: 80%;
						left: auto;
						right: 24px;
						background-color: rgb(255, 255, 255);
						color: rgb(4, 13, 20);
						padding: 12px 12px 12px 24px;
						border-radius: 8px;
						margin: auto;
					`}
				>
					{/* <DrawerContext.Consumer> */}
					{/* {this.renderProvider()} */}
					{/* </DrawerContext.Consumer> */}
				</div>
			</Portal>
		)
	}
}

const Navbar = styled.nav`
	/* position: absolute; */
	position: fixed;
	-webkit-box-align: center;
	-webkit-align-items: center;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	top: 0;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 12px 24px;
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	z-index: 10;
	max-width: 80%;
	width: 500px;
	left: 0;
	background-color: rgb(255, 255, 255);
	color: red;
	padding: 12px 12px 12px 24px;
	border-radius: 0 8px 8px 0;
`

{
	/* <SideMenu>
	<SideMenuItem>
	<i></i> Example 1
	</SideMenuItem>
	<SideMenuItem>
	<i></i> Example 2
	</SideMenuItem>
	<SideMenuItem>
	<i></i> Example 3
	</SideMenuItem>
	
	<Separator />
	
	<SideMenuItem>
	<i></i> Example 4
	</SideMenuItem>
	<SideMenuItem>
	<i></i> Example 5
	</SideMenuItem>
	<SideMenuItem>
	<i></i> Example 6
	</SideMenuItem>
	
	<Separator />
	
	<SideMenuItem>
	<i></i> Example 7
	</SideMenuItem>
	<SideMenuItem>
	<i></i> Example 8
	</SideMenuItem>
	<SideMenuItem>
	<i></i> Example 9
	</SideMenuItem>
	</SideMenu> */
}
