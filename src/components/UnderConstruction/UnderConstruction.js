import * as React from 'react'
import './UnderConstruction.sass'
import HeadingAnimation from '../HeadingAnimation/HeadingAnimation'
import logo from '../../assets/images/logo.png'

const textsArray = [
	'At this moment..',
	'We are welding new BattleShips',
	'Come back to us later'
]

export default class UnderConstruction extends React.Component {
	// constructor() {
	// 	super()
	// 	// this.state = {headingText: textsArray[0]}
	// 	// setTimeout(() => {
	// 	// 	this.setState({headingText: textsArray[1]})
	// 	// }, 500)
	// }
	
	componentDidMount() {
			// when the state is updated (turned red),
			// a timeout is triggered to switch it back off
			// setTimeout(() => {
			// 	this.setState({headingText: textsArray[1]})
			// }, 3000);
	}
	
	generateAnimatedText(...texts) {
		// const createdText = []
		// texts.forEach((text, index) => {
		// 	createdText.push(<HeadingAnimation key={index} animatedText={text} textSize={`2.5rem`} />)
		// })
		// setTimeout(() => {
		// 	this.setState({headingText: textsArray[1]})
		// }, 300)
		
	}
	
	render() {
		return (
			<div className="under-construction">
				<header>
					<img src={logo} alt=""/>
				</header>
				<section className="under-construction__heading">
					
					{
						<HeadingAnimation animatedTexts={textsArray} textSize={`4rem`} />
					}
				</section>
				
			</div>
		)
	}
}