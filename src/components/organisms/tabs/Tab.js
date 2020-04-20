import React, { Component } from 'react'
import { TabConsumer, TabsContext } from './context'

class Tab extends Component {
	static contextType = TabsContext

	componentDidMount() {
		const value = this.context
		value.context.addTab({
			id: this.props.id,
			title: this.props.title
		})
	}

	render() {
		return (
			<TabConsumer>
				{value => {
					return value.context.activeTab.id === this.props.id && this.props.children
				}}
			</TabConsumer>
		)
	}
}

export default Tab
