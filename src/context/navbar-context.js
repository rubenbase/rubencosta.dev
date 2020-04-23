import React from 'react'

const NavbarIsOpenStateContext = React.createContext()
const NavbarIsOpenDispatchContext = React.createContext()

function navbarIsOpenReducer(state, action) {
	switch (action.type) {
		case 'toggleIsOpen': {
			return { isOpen: !state.isOpen }
		}
		default: {
			throw new Error(`Unhandled action type: ${action.type}`)
		}
	}
}

function NavbarIsOpenProvider({ children }) {
	const [state, dispatch] = React.useReducer(navbarIsOpenReducer, { isOpen: false })

	return (
		<NavbarIsOpenStateContext.Provider value={state}>
			<NavbarIsOpenDispatchContext.Provider value={dispatch}>
				{children}
			</NavbarIsOpenDispatchContext.Provider>
		</NavbarIsOpenStateContext.Provider>
	)
}

function useNavbarIsOpenState() {
	const context = React.useContext(NavbarIsOpenStateContext)
	if (context === undefined) {
		throw new Error('useNavbarIsOpenState must be used within a NavbarIsOpenProvider')
	}
	return context
}

// function NavbarIsOpenConsumer({ children }) {
// 	return (
// 		<CountStateContext.Consumer>
// 			{context => {
// 				if (context === undefined) {
// 					throw new Error('CountConsumer must be used within a CountProvider')
// 				}
// 				return children(context)
// 			}}
// 		</CountStateContext.Consumer>
// 	)
// }

function useNavbarIsOpenDispatch() {
	const context = React.useContext(NavbarIsOpenDispatchContext)
	if (context === undefined) {
		throw new Error('useCountDispatch must be used within a CountProvider')
	}
	return context
}

export {
	// useNavbarIsOpenConsumer,
	NavbarIsOpenProvider,
	useNavbarIsOpenState,
	useNavbarIsOpenDispatch
}
