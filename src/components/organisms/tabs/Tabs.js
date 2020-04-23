import React, { Component } from 'react'
import styled from '@emotion/styled'

import { TabProvider, TabConsumer } from './context'
import Tab from './Tab'

const ListTabs = styled.ul`
	display: flex;
	padding: 1em 0;
	white-space: nowrap;
	position: relative;
	list-style: none;
	overflow-y: auto;
	overflow-x: scroll;
	width: 100%;
	margin: 0;
	background: ${({ theme }) => theme.colors.companiesListContainer};
	position: -webkit-sticky;
	position: sticky;
	margin: 0;
	top: 0;
	z-index: 9;

	@media (min-width: 768px) {
		display: flex;
		flex-direction: column;
		padding: 1em 0;
		margin: 0;
		width: 224px;
	}
`

const TabTitleItem = styled.li`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: ${({ theme }) => theme.colors.companiesList};
	border-radius: 8px;
	width: 100%;
	margin-right: 0.5em;
	transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
	padding: 16px 20px;
	cursor: ${props => (props.isActiveTab ? 'default' : 'pointer')};
	opacity: ${props => (props.isActiveTab ? 1 : 0.4)};

	&:hover {
		opacity: 1;
	}

	@media (min-width: 768px) {
		margin-right: 0;
	}
`

const TabAnchorItem = styled.a`
	color: #000;
	font-weight: 600;
	margin-right: 0.5em;
	@media (min-width: 768px) {
		margin-right: 0em;
	}
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
									<TabAnchorItem href="#companiesList">
										<TabItem
											key={index}
											onClick={value.context.onClick}
											tab={tab}
											id={tab.id}
											isActiveTab={value.context.activeTab.id === tab.id}
										>
											{tab.title}
										</TabItem>
									</TabAnchorItem>
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
