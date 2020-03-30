import Typography from 'typography'

const typography = new Typography({
	baseFontSize: '17px',
	baseLineHeight: '28px',
	googleFonts: [
		{
			name: 'Montserrat',
			styles: ['700']
		},
		{
			name: 'Roboto',
			styles: ['400']
		}
	],
	headerFontFamily: ['Montserrat', 'Arial', 'sans-serif'],
	bodyFontFamily: ['Roboto', 'Georgia']
})

export default typography
