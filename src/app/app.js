import React from 'react'
import { Router } from '@reach/router'
// import Layout from "../components/layout"
import NavBar from './components/NavBar'
import Profile from './profile'
import Main from './main'
import PrivateRoute from './components/PrivateRoute'
import Login from './pages/login'

const App = () => {
	return (
		<>
			<Router>
				<Profile path="/app/profile" />
				<PublicRoute path="/app">
					{/* <PrivateRoute path='/' component={Main} /> */}
					<Login path="/login" />
				</PublicRoute>
			</Router>
		</>
	)
}

function PublicRoute(props) {
	return <div>{props.children}</div>
}

export default App
