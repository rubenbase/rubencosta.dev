// custom typefaces
// import "typeface-montserrat"
// import "typeface-merriweather"

// import "prismjs/themes/prism.css"

// INFO: Apply something to every page like this
// import React from 'react';
// import Layout from './src/components/layout';

// const wrapPageElement = ({ element, props }) => {
//   return <Layout {...props}>{element}</Layout>;
// };

// export { wrapPageElement };
import { wrapRootElement as wrap } from 'utils/root-wrapper'

export const wrapRootElement = wrap

export const onInitialClientRender = () => {
	require('typeface-roboto')
	require('typeface-montserrat')
}
