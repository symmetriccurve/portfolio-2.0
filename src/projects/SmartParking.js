import React from 'react'

export default () => {
  return (
	<div className="p-cards__p-card">
		<div className="p-card__date">
			<span className="p-card__date-text"> 
				Nov 2015 to Jan 2016 
			</span>
		</div>
		<div className="p-card__body">
			<div className="p-card__title">
				<span className="p-card__title-text">
					Verizon Wireless, Ma 
				</span> 
			</div>
			<div className="p-card__title">
				<span className="p-card__title-text">
					Project - <span className="p-card__title-text--project-name">SmartParking</span> 
				</span> 
			</div>
			<div className="p-card__description">
				<span className="p-card__description-text">
					<ul>
						<li>Debugged a smart parking app on iOS platform and fixed issues</li>
						<li>Added ability to listen live events from the database and update the status of the spot</li>
						<li>Integrated Firebase to fetch data from backend and added ability to reserve a spot from the App.</li>
						<li>Added ability to make a place search using Google location API.</li>
						<li>Deployed application on multiple iOS devices and worked with testing teams to troubleshoot device deployments.</li> 
						<li>Extensively worked on Test Flight to deploy application to test devices/ user devices.</li>
						<li>Integrated Crash analytics to debug application in case of app crashes</li>
					</ul>
				</span>
			</div>
			<div className="p-card__buttons">
				<a href="https://medium.com/@beldevikram/this-is-a-test-medium-post-291f4202e141">
					{/* <div className="p-card__button">
              More
					</div> */}
				</a>
			</div>
		</div>
	</div>
  )
}
