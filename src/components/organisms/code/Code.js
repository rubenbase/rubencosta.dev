import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwl'
import React, { useCallback, useState } from 'react'
import styled from '@emotion/styled'
import { copyToClipboard } from 'utils/copy-to-clipboard'
import { colors } from 'styles'
import { css } from '@emotion/core'
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live'

const Code = props => {
	const [isCopied, setIsCopied] = useState(false)

	const handleClick = useCallback(() => {
		copyToClipboard(props.codeString)
		setIsCopied(true)
		setTimeout(() => {
			setIsCopied(false)
		}, 2000)
	}, [props.codeString])

	if (props['react-live']) {
		return (
			<LiveProvider code={props.codeString} theme={theme}>
				<LiveEditor />
				<LiveError />
				<LivePreview />
			</LiveProvider>
		)
	}

	return (
		<>
			<CodeContainer>
				<CodeHeader>
					<CopyCode isCopied={isCopied} onClick={handleClick}>
						{isCopied ? 'Copied !' : 'Copy'}
					</CopyCode>
					<div
						css={css`
							width: 50%;
							padding: 0 2em;
							display: flex;
							justify-content: center;
						`}
					>
						{props.metastring}
					</div>
				</CodeHeader>
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
const CopyCode = styled.button`
	background-color: ${props =>
		console.log('alibaba', props) && (props.isCopied ? colors.primary : 'white')};
	border: 0;
	width: 50%;
	height: 100%;
	border-radius: 10px 10px 0px 0px;
	padding: 0 2em;
	opacity: ${props => (props.isCopied ? '1' : '0.3')};
	&:hover {
		opacity: 1;
	}
`

const CodeHeader = styled.div`
	display: flex;
	/* flex-direction: row-reverse; */
	justify-content: space-between;
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
	border-top: 1px solid #ffffff;
	padding: 1em 2em;
	font-size: 0.9em;
	max-height: 340px;
	position: relative;

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
