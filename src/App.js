import React from 'react'
import './App.sass'
import Dashboard from "./components/Dashboard/Dashboard";

export default class App extends React.Component {

  constructor() {
    super();

    this.state = {
      changeView: false,
      userName: '',
    };
  }

  onViewChange = ({changeView, userName}) => {
    this.setState({
      changeView: changeView,
      userName: userName
    })
  };

  viewSwitch(state) {
    if (state.changeView) {
      return (<Dashboard userName={state.userName}/>)
    } else {
      return (<StartPage onViewChange={this.onViewChange}/>)
    }
  }

  render() {
    return (
      <div>
        {this.viewSwitch(this.state)}
      </div>
    )
  }
}