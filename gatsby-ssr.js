import { wrapRootElement as wrap } from 'utils/root-wrapper'

export const wrapRootElement = wrap

const onRenderBody = ({ setPostBodyComponents }) => {
	setPostBodyComponents([<div key="cookie-overlay" id="cookie-overlay" />])
}

export { onRenderBody }
