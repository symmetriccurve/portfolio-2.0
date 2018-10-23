import React from 'react';
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
		<div className='cen links-cont launch-page__links'>
			<a href="/portfolio" className="launch-page__link">Portfolio</a>
			<span className='launch-page__link--seperator'>| </span> &nbsp;&nbsp;
			<a href="#" className="launch-page__link">Blog</a>
			<span className='launch-page__link--seperator'>| </span> &nbsp;&nbsp;
			<a href="#" className="launch-page__link">Apps</a>
			<span className='launch-page__link--seperator'>| </span> &nbsp;&nbsp;
			<a href="#" className="launch-page__link">LinkedIn</a>
			<span className='launch-page__link--seperator'>| </span> &nbsp;&nbsp;
			<a href="#" className="launch-page__link">Code</a>
		</div>
	</div>
  );
}
