import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwl'
import React from 'react'
import styled from '@emotion/styled'

const Code = props => {
	return (
		<>
			<CodeContainer>
				<CodeHeader>{props.metastring}</CodeHeader>
				<Highlight
					{...defaultProps}
					code={props.codeString}
					language={props.language}
					theme={theme}
				>
					{({ className, style, tokens, getLineProps, getTokenProps }) => (
						<Pre className={className} style={style}>
							{tokens.map((line, i) => (
								<div {...getLineProps({ line, key: i })}>
									<LineNo>{i + 1}</LineNo>

									{line.map((token, key) => (
										<span {...getTokenProps({ token, key })} />
									))}
								</div>
							))}
						</Pre>
					)}
				</Highlight>
			</CodeContainer>
		</>
	)
}

const CodeHeader = styled.div`
	display: flex;
	flex-direction: row-reverse;
	align-items: center;
	padding-right: 1em;
	height: 30px;
	color: #f2f2f2;
	border-radius: 10px 10px 0px 0px;
	background-color: #011628;
	margin-bottom: -2px;
	overflow: auto;
	word-wrap: normal;
`
const CodeContainer = styled.div`
	margin: 2em 0;
`
const Pre = styled.pre`
	border-top: 1px solid #ffffff29;
	padding: 1em 2em;
	font-size: 0.9em;
	max-height: 340px;

	& .token-line {
		line-height: 1.5em;
		height: 1.5em;
	}
`

const LineNo = styled.span`
	/* line-height: 1.6em; */
	display: inline-block;
	width: 2em;
	user-select: none;
	opacity: 0.2;
`

export default Code
