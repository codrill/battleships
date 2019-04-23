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