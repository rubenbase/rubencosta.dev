import React from 'react'
import { Global } from '@emotion/core'
import './reset.css'

function ResetCSS() {
	return (
		<>
			<Global
				styles={{
					html: {
						fontFamily: 'Open Sans',
						MozTextSizeAdjust: '100%',
						WebkitTextSizeAdjust: '100%'
					},
					body: {
						margin: 0
					}
				}}
			/>
		</>
	)
}

export default ResetCSS
