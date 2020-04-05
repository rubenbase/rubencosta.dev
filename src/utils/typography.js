import Typography from 'typography'

const typography = new Typography({
	baseFontSize: '17px',
	baseLineHeight: '28px',
	omitGoogleFont: true,
	// googleFonts: [
	// 	{
	// 		name: 'Montserrat',
	// 		styles: ['400', '700']
	// 	},
	// 	{
	// 		name: 'Roboto',
	// 		styles: ['400', '500']
	// 	}
	// ],
	headerFontFamily: ['Montserrat', 'Arial', 'sans-serif'],
	bodyFontFamily: ['Roboto', 'Georgia']
})

export default typography
