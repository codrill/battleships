import './StartPage.sass'
import React, { Component } from 'react'

export default class StartPage extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      name: '',
      content: ''
    };
  }
  
  onGoNext = () => {
    console.log('this.refs.name1.value', this.refs.name1.value);
    this.setState({
      name: this.refs.name1.value
    });
    
    this.setState((state) => ({
      content: !!state.name ? `Nice to have you here ${state.name}! ` : ''
    }));
    
    console.log(this.state)
  };
  
  render() {
    
    return (
      <div className="start-page">
        <h1>Start Page</h1>
        <input type="text" id="name1" ref="name1" placeholder="Provide your name"/>
        <button onClick={this.onGoNext}>Go next!</button>
        
          <div>{ this.state.content }</div>
      </div>
    )
  }
}
