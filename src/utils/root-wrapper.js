import React from 'react'

import { css } from '@emotion/core'
import { ThemeProvider } from 'theme-ui'
import Code from 'components/organisms/code'

import theme from './theme'

const components = {
	a: props => (
		<a {...props} style={{ color: '#19a764' }}>
			{props.children}
		</a>
	),
	inlineCode: props => (
		<code
			css={css`
				background-color: rgb(36, 206, 153, 0.27);
			`}
			{...props}
		/>
	),
	pre: ({ children: { props } }) => {
		if (props.mdxType === 'code') {
			return (
				<Code
					codeString={props.children.trim()}
					language={props.className && props.className.replace('language-', '')}
					{...props}
				/>
			)
		}
	}
}

export const wrapRootElement = ({ element }) => (
	<ThemeProvider theme={theme} components={components}>
		{element}
	</ThemeProvider>
)
