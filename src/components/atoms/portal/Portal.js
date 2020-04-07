import React from 'react'
import ReactDOM from 'react-dom'

export default class Portal extends React.Component {
	constructor(props) {
		super(props)
		this.portalRoot = document.getElementById(this.props.name)
		this.el = document.createElement('div')
	}

	componentDidMount = () => {
		this.portalRoot.appendChild(this.el)
	}

	componentWillUnmount = () => {
		this.portalRoot.removeChild(this.el)
	}

	render() {
		const { children } = this.props
		return ReactDOM.createPortal(children, this.el)
	}
}
