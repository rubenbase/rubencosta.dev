import React from 'react'
import { Global } from '@emotion/core'
import './reset.css'

function ResetCSS() {
	return (
		<>
			<Global
				styles={{
					html: {
						MozTextSizeAdjust: '100%',
						WebkitTextSizeAdjust: '100%'
					},
					body: {
						// backgroundColor: 'white',
						fontSize: '16px'
						// color: 'rgb(4, 13, 20)'
					}
				}}
			/>
		</>
	)
}

export default ResetCSS
