import React from 'react';
import {
  Link
} from 'react-router-dom'

export default function () {
  return (
	<div className='launch-page'>
		<div className='launch-page__name'>
			<span className="name__letter">V</span>
			<span className="name__letter">i</span>
			<span className="name__letter">k</span>
			<span className="name__letter">r</span>
			<span className="name__letter">a</span>
			<span className="name__letter">m</span>
          &nbsp;&nbsp;
			<span className="name__letter--lname">B</span>
			<span className="name__letter--lname">e</span>
			<span className="name__letter--lname">l</span>
			{/* <span className="name lName">d</span> 
              <span className="name lName">e</span>   */}
		</div>
		<div className='launch-page__links'>
			<Link to="/blog">
				<span className="launch-page__link">Blog</span>
			</Link>
			<span className='launch-page__link--seperator'>| </span>
			<Link to="/projects">
				<span className="launch-page__link">Projects</span>
			</Link>
			<span className='launch-page__link--seperator'>| </span>
			<a href="https://itunes.apple.com/us/developer/vikram-belde" className="launch-page__link">Apps</a>
			<span className='launch-page__link--seperator'>| </span>
			<a href="https://www.linkedin.com/in/vikrambelde/" className="launch-page__link">LinkedIn</a>
			<span className='launch-page__link--seperator'>| </span>
			<a href="https://github.com/symmetriccurve" className="launch-page__link">Code</a>
			<span className='launch-page__link--seperator'>| </span>
			<Link to="/contact">
				<span className="launch-page__link">Contact</span>
			</Link>
		</div>
	</div>
  );
}
