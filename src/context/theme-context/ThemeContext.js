import React from 'react'
import themeDark from 'styles/themes/dark-theme'
import themeLight from 'styles/themes/light-theme'

const defaultState = {
	dark: false,
	themeLoaded: themeLight,
	toggleDark: () => {}
}

const ThemeContext = React.createContext(defaultState)

const supportsDarkMode = () => window.matchMedia('(prefers-color-scheme: dark)').matches === true

class ThemeProvider extends React.Component {
	state = {
		dark: false
	}

	toggleDark = () => {
		const dark = !this.state.dark
		localStorage.setItem('dark', JSON.stringify(dark))
		this.setState({ dark })
	}

	componentDidMount() {
		// Getting dark mode value from localStorage!
		const lsDark = JSON.parse(localStorage.getItem('dark'))
		if (lsDark) {
			this.setState({ dark: lsDark })
		} else if (supportsDarkMode()) {
			this.setState({ dark: true })
		}
	}

	render() {
		const { children } = this.props
		const { dark } = this.state

		let themeLoaded = themeLight

		if (dark) {
			themeLoaded = themeDark
		}

		return (
			<ThemeContext.Provider
				value={{
					themeLoaded,
					dark,
					toggleDark: this.toggleDark
				}}
			>
				{children}
			</ThemeContext.Provider>
		)
	}
}

export default ThemeContext

export { ThemeProvider }
