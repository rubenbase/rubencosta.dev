import React from 'react'
import ReactDOM from 'react-dom'

import { Link } from 'gatsby'
import cookie from 'react-cookies'
import { css } from '@emotion/core'

const portalRoot = document.getElementById('cookie-overlay')

class Portal extends React.Component {
	constructor() {
		super()
		this.el = document.createElement('div')
	}

	componentDidMount = () => {
		portalRoot.appendChild(this.el)
	}

	componentWillUnmount = () => {
		portalRoot.removeChild(this.el)
	}

	render() {
		const { children } = this.props
		return ReactDOM.createPortal(children, this.el)
	}
}

class CookieOverlay extends React.Component {
	state = {
		on: !cookie.load('gdpr_consent')
	}

	toggle = () => {
		// Create a new "on" state to mount the Portal component via the button
		this.setState({
			on: !this.state.on
		})
	}

	handleClick = () => {
		this.setState({
			on: !this.state.on
		})
		cookie.save('gdpr_consent', '1', { path: '/' })
	}

	render() {
		const { on } = this.state
		return (
			<Portal>
				{on ? (
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
						<div
							css={css`
								margin-right: 36px;
							`}
						>
							<span
								css={css`
									font-family: 'Roboto', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
										Helvetica, Arial, sans-serif;
									font-size: 16px;
									font-style: normal;
									font-weight: 300;
									line-height: 19px;
									letter-spacing: normal;
									color: rgb(4, 13, 20);
									margin: 0px;
									text-decoration: unset;
								`}
							>
								We use cookies to provide you with the best experience and show you relevant
								advertising.
							</span>
							<Link
								to="/"
								css={css`
									color: inherit;
									-webkit-text-decoration: none;
									text-decoration: none;
									display: unset;
									text-align: start;
								`}
							>
								<span
									css={css`
										font-family: 'Roboto', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
											Helvetica, Arial, sans-serif;
										font-size: 16px;
										font-style: normal;
										font-weight: 300;
										line-height: 19px;
										letter-spacing: normal;
										color: rgb(33, 206, 153);
										margin: 0px;
										text-decoration: unset;
									`}
								>
									{' '}
									Learn More
								</span>
							</Link>
						</div>
						<button
							onClick={this.handleClick}
							css={css`
								background: none;
								border: 0;
								padding: 0;
								font: inherit;
								-webkit-appearance: none;
								display: -webkit-inline-box;
								display: -webkit-inline-flex;
								display: -ms-inline-flexbox;
								display: inline-flex;
								-webkit-align-items: center;
								-webkit-box-align: center;
								-ms-flex-align: center;
								align-items: center;
								-webkit-box-pack: center;
								-webkit-justify-content: center;
								-ms-flex-pack: center;
								justify-content: center;
								box-sizing: border-box;
								position: relative;
								overflow: hidden;
								white-space: nowrap;
								cursor: pointer;
								height: 44px;
								min-width: 76px;
								padding: 0 16px;
								border-radius: 8px;
								border-color: #21ce99;
								background-color: #21ce99;
							`}
						>
							<span
								css={css`
									position: absolute;
									top: 0;
									left: 0;
									bottom: 0;
									width: 0%;
									background-color: #18563e;
									-webkit-transition: width 300ms;
									transition: width 300ms;
								`}
							></span>
							<span
								css={css`
									position: relative;
									visibility: inherit;
								`}
							>
								<span
									css={css`
										font-family: 'Roboto', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
											Helvetica, Arial, sans-serif;
										font-size: 16px;
										font-style: normal;
										font-weight: 700;
										line-height: 18px;
										letter-spacing: normal;
										color: rgb(4, 13, 20);
										margin: 0px;
										text-decoration: unset;
									`}
								>
									I accept
								</span>
							</span>
						</button>
					</div>
				) : null}
			</Portal>
		)
	}
}

export default CookieOverlay
