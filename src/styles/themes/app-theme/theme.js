import { lightModeColors, darkModeColors } from '../colors/colors'

export default {
	// fonts: {
	// 	body: 'Georgia, Cambria, "Times New Roman", Times, serif',
	// 	heading: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
	// },
	// fontSizes: [12, 14, 16, 20, 24, 32, 48],
	// fontWeights: {
	// 	body: 400,
	// 	heading: 700
	// },
	// lineHeights: {
	// 	body: 1.5,
	// 	heading: 1.125
	// },
	colors: {
		...lightModeColors,
		modes: {
			dark: {
				...darkModeColors
			}
		}
	},
	space: [0, 4, 8, 16, 32, 48],
	breakpoints: ['40em', '64em', '80em']
}

// space: [0, 8, 16, 32, 64],
// breakpoints: ['768px', '1025px', '1290px']
