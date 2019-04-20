import React, {Component} from 'react'
import './App.sass'
import UnderConstruction from './components/UnderConstruction/UnderConstruction'
import {Route, Switch} from "react-router";
import StartPage from "./components/StartPage/StartPage";
import {BrowserRouter} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={UnderConstruction }/>
            <Route path="/dev" component={StartPage }/>
          </Switch>
        </BrowserRouter>
    )
  }
}
