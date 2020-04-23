/** @jsx jsx */
import { jsx, useColorMode } from 'theme-ui'

const ColorSwitch = () => {
	const [colorMode, setColorMode] = useColorMode()

	return (
		<div sx={{ textAlign: 'center' }}>
			<button
				onClick={() => {
					setColorMode(colorMode === 'light' || colorMode === 'default' ? 'dark' : 'light')
				}}
				sx={{
					backgroundColor: '#fff',
					borderRadius: '1em',
					border: 0,
					color: 'black',
					fontFamily: 'heading',
					fontSize: [0, 1],
					fontWeight: 'bold',
					margin: 3,
					px: 3
					// py: 3
				}}
			>
				{colorMode === 'light' ? 'Dark' : 'Light'} theme
			</button>
		</div>
	)
}

export default ColorSwitch
