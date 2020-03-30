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
						backgroundColor: '#2B192F',
						fontSize: '16px',
						color: 'white'
					}
				}}
			/>
		</>
	)
}

export default ResetCSS
