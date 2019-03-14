import {BrowserRouter} from 'react-router-dom'
import {Route} from 'react-router'
import StartPage from './components/StartPage/StartPage'
import React, {Component} from 'react'

class AppRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" component={StartPage} exact/>
        </div>
      </BrowserRouter>
    )
  }
}

export default AppRouter
