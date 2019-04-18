import React from 'react'
import './App.sass'
import StartPage from './components/StartPage/StartPage'
import Dashboard from "./components/Dashboard/Dashboard";

export default class App extends React.Component {

  constructor(props) {
    super(props);

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


  SwitchView(state) {
    if (state.changeView) {
      return (<Dashboard userName={state.userName}/>)
    } else {
      return (<StartPage onViewChange={this.onViewChange}/>)
    }
  }

  render() {
    return (
      <div>
        {this.SwitchView(this.state)}
      </div>
    )
  }
}