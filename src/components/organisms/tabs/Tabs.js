import React, { Component } from 'react'
import styled from '@emotion/styled'

import { TabProvider, TabConsumer } from './context'
import Tab from './Tab'

const ListTabs = styled.ul`
	display: flex;
	flex-direction: column;
	position: relative;
	width: max-content;
	background-color: ${({ theme }) => theme.colors.black};
	padding: 1em 0;
	margin: 0px;
	list-style: none;
`

const TabTitleItem = styled.li`
	display: inline-block;
	padding-right: 5;
	padding-left: 5;
	transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
	padding: 16px 30px;
	cursor: ${props => (props.isActiveTab ? 'default' : 'pointer')};
	opacity: ${props => (props.isActiveTab ? 1 : 0.4)};

	&:hover {
		opacity: 1;
	}
`

const TabAnchorItem = styled.a`
	color: #fff;
	font-weight: 600;
`

function TabItem(props) {
	return (
		<TabTitleItem {...props} onClick={() => props.onClick(props.tab)}>
			{props.children}
		</TabTitleItem>
	)
}

class Tabs extends Component {
	static Tab = Tab

	state = {
		tabsElements: []
	}

	componentDidMount() {}

	render() {
		return (
			<TabProvider activeTab={this.props.activeTab}>
				<TabConsumer>
					{value => (
						<>
							<ListTabs>
								{value.context.tabs.map((tab, index) => (
									<TabItem
										key={index}
										onClick={value.context.onClick}
										tab={tab}
										id={tab.id}
										isActiveTab={value.context.activeTab.id === tab.id}
									>
										<TabAnchorItem>{tab.title}</TabAnchorItem>
									</TabItem>
								))}
							</ListTabs>
							{this.props.children}
						</>
					)}
				</TabConsumer>
			</TabProvider>
		)
	}
}

export default Tabs
