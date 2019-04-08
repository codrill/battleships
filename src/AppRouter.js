import {BrowserRouter} from 'react-router-dom'
import {Route} from 'react-router'
import React, {Component} from 'react'
import UnderConstruction from './components/UnderConstruction/UnderConstruction'
import StartPage from "./components/StartPage/StartPage";

class AppRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" component={UnderConstruction} exact/>
          <Route path="/dev" component={StartPage}/>
        </div>
      </BrowserRouter>
    )
  }
}

export default AppRouter
