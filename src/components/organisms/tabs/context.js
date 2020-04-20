import React from 'react'

export const TabsContext = React.createContext({
	prevActiveTab: {},
	activeTab: {}
})

class TabProvider extends React.Component {
	state = {
		tabs: [],
		prevActiveTab: {},
		activeTab: this.props.activeTab
	}

	addTab = newTab => {
		let isNewTabFound

		for (let i in this.state.tabs) {
			let tab = this.state.tabs[i]

			if (tab.id === newTab.id) {
				isNewTabFound = true
				break
			}
		}

		if (!isNewTabFound) {
			this.setState(prevState => {
				return {
					tabs: prevState.tabs.concat(newTab)
				}
			})
		}
	}

	removeTab = tabId => {
		this.setState(prevState => {
			return {
				tabs: prevState.tabs.filter(tab => tab.id !== tabId)
			}
		})
	}

	onClick = tab => {
		this.setState(prevState => {
			return {
				prevActiveTab: prevState.activeTab,
				activeTab: tab
			}
		})
	}

	render() {
		return (
			<TabsContext.Provider
				value={{
					context: {
						...this.state,
						addTab: this.addTab,
						removeTab: this.removeTab,
						onClick: this.onClick
					}
				}}
			>
				{this.props.children}
			</TabsContext.Provider>
		)
	}
}

const TabConsumer = TabsContext.Consumer

export { TabProvider, TabConsumer }
