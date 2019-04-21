import * as React from 'react'
import './HeadingAnimation.sass'

export default class HeadingAnimation extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      animatedTexts: props.animatedTexts,
      currentTextToAnimate: props.animatedTexts[0],
      textSize: props.textSize
    }
  }
  
  componentDidMount() {
    this.currentTextIndex = 0
    this.changeText = setInterval(this.updateText.bind(this), 5000)
  }
  
  updateText() {
    // console.log('currentTextToAnimate index', this.state.animatedTexts.indexOf(this.state.currentTextToAnimate))
    
    this.currentTextIndex++
  
    this.setState({
      currentTextToAnimate: this.state.animatedTexts[this.currentTextIndex]
    })
    
    console.log('state', this.currentTextIndex, this.state.currentTextToAnimate)
    if (this.currentTextIndex === this.state.animatedTexts.length - 1)
      clearInterval(this.changeText)
  }
  

  render() {
    return(
      <div className="heading-animation">
        <h2 style={{fontSize: this.props.textSize, animationIterationCount: this.props.animatedTexts.length}}>
          { this.state.currentTextToAnimate }
        </h2>
      </div>
    )
  }
}