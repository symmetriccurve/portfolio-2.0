{/*eslint-disable*/ }
import React, { Component } from 'react';
import
{
	Link
} from 'react-router-dom'

// import particleJS from 'particles.js'

// particleJS.load('particles.js', '../particlesjs-config.json', function() {
//   console.log('callback - particles.js config loaded');
// });

export default class LaunchPage extends Component
{
	componentDidMount()
	{
		particlesJS.load('particles-js', '/particlesjs-config.json', function ()
		{
			//console.log('callback - particles.js config loaded');
		});
	}
	render()
	{
		return (
			<div className='launch-page' id='particles-js'>
				<div className='launch-page__name'>
					<span className='name__letter'>V</span>
					<span className='name__letter'>i</span>
					<span className='name__letter'>k</span>
					<span className='name__letter'>r</span>
					<span className='name__letter'>a</span>
					<span className='name__letter'>m</span>
					&nbsp;&nbsp;
					<span className='name__letter--lname'>B</span>
					<span className='name__letter--lname'>e</span>
					<span className='name__letter--lname'>l</span>
					{/* <span className='name lName'>d</span> 
              <span className='name lName'>e</span>   */}
				</div>
				<div className='launch-page__links'>
					<Link to='/blog'>
						<span className='launch-page__link'>Blog</span>
					</Link>
					{/* <span className='launch-page__link--seperator'>|</span> */}
					<Link to='/projects'>
						<span className='launch-page__link'>Projects</span>
					</Link>
					{/* <span className='launch-page__link--seperator'>|</span> */}
					<a href='https://itunes.apple.com/us/developer/vikram-belde/id1164307305' className='launch-page__link'>Apps</a>
					{/* <span className='launch-page__link--seperator'>|</span> */}
					<a href='https://www.linkedin.com/in/vikrambelde/' className='launch-page__link'>LinkedIn</a>
					{/* <span className='launch-page__link--seperator'>|</span> */}
					<a href='https://github.com/symmetriccurve' className='launch-page__link'>Code</a>
					{/* <span className='launch-page__link--seperator'>|</span> */}
					<Link to='/my-interview'>
						<span className='launch-page__link'>My interview</span>
					</Link>
					<Link to='/contact'>
						<span className='launch-page__link'>Contact</span>
					</Link>
				</div>
				<div className='launch-page__bottom__links'>
					<a href='https://github.com/symmetriccurve/portfolio-2.0' target='_blank' className='bottom__links__link'>This portfolio is open source</a>
				</div>
			</div>
		)
	}
}
