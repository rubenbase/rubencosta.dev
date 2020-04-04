import { MDXProvider } from '@mdx-js/react'
import React from 'react'
import Code from 'components/organisms/code'
import { css } from '@emotion/core'

const components = {
	// h2: ({ children }) => <h2 style={{ color: 'rebeccapurple' }}>{children}</h2>,
	// a: ({ children }) => <a style={{ color: colors.primary }}>{children}</a>,
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
	<MDXProvider components={components}>{element}</MDXProvider>
)
