import {BrowserRouter} from 'react-router-dom'
import {Route} from 'react-router'
import React, {Component} from 'react'
import UnderConstruction from './components/UnderConstruction/UnderConstruction'

class AppRouter extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Route path="/" component={UnderConstruction} exact/>
				</div>
			</BrowserRouter>
		)
	}
}

export default AppRouter
