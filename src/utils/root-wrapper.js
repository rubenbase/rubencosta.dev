import React from 'react'

import { ThemeProvider } from 'theme-ui'
import MDXComponents from 'styles/themes/mdx-theme'

import theme from 'styles/themes/app-themes/light'

export const wrapRootElement = ({ element }) => (
	<ThemeProvider theme={theme} components={MDXComponents}>
		{element}
	</ThemeProvider>
)
