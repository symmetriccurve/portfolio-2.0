import React from 'react'

export default () => {
  return (
	<div className="p-cards__p-card">
		<div className="p-card__date">
			<span className="p-card__date-text"> 
				Feb 2016 to Jan 2017 
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
					Project - <span className="p-card__title-text--project-name">CoHo</span> 
				</span> 
			</div>
			<div className="p-card__description">
				<span className="p-card__description-text">
					<ul>
						<li>Implemented Redux Architecture to manage the state of the application</li>
						<li>Created UI wizards to handle missing fields and handled multiple cross validations before posting to server</li>
						<li>Closely worked with backend team to design JSON structures as required by the application</li>
						<li>Added ability to filter devices based on type/OEM and create categories on the fly</li>
						<li>Extensively worked on the local storage to handle half done wizard information and pre fill next time as user logs into the wizard</li>
						<li>Designed wireframes and created prototypes to better understand the requirement and workflow.</li>
						<li>Designed custom icons and created icon packs to add fine UI details to the app.</li>
						<li>Used Fake API services in case of delayed backend requirement fulfillment</li>
					</ul>
				</span>
			</div>
			<div className='p-card__tech-stack'>
				<div className='tech-stack__title'>
					Technical Stack
				</div>
				<div className='tech-stack__body'>
					React-native, iOS, Android, Xcode, Android studio, npm, Google-Maps, Air-Maps, Firebase, Java.
				</div>	
			</div>
		</div>
	</div>
  )
}
