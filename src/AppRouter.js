import {BrowserRouter} from 'react-router-dom'
import {Route} from 'react-router'
import React, {Component} from 'react'
import UnderConstruction from './components/UnderConstruction/UnderConstruction'
import StartPage from "./components/StartPage/StartPage";
import Switch from "react-router/Switch";

class AppRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={UnderConstruction}/>
          <Route path="/dev" component={StartPage}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default AppRouter
