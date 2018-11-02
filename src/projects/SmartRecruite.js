import React from 'react'

export default () => {
  return (
	<div className="p-cards__p-card">
		<div className="p-card__date">
			<span className="p-card__date-text"> 
				June 2017 to Present 
			</span>
		</div>
		<div className="p-card__body">
			<div className="p-card__title">
				<span className="p-card__title-text">
					Verizon - Sensity System, Texas 
				</span> 
			</div>
			<div className="p-card__title">
				<span className="p-card__title-text">
					Project - <span className="p-card__title-text--project-name">Content Management Systems</span> 
				</span> 
			</div>
			<div className="p-card__description">
				<span className="p-card__description-text">
						Sensity® Systems uses energy-efficient LED lighting as the foundation for its IoT platform for Smart Cities. The company enables light owners to capitalize on the LED conversion process by embedding networking technology within both retrofit and new LED luminaires. With the Sensity open, privacy-by-design, multiservice NetSense™ platform, lighting owners are able to reduce energy costs and implement a variety of Smart City applications and services, including public safety, environmental and weather monitoring, parking management and location analytics.
				</span>
			</div>
			<div className='p-card__tech-stack'>
				<div className='tech-stack__title'>
					Technical Stack
				</div>
				<div className='tech-stack__body'>
					Jquery, PHP,  HTML and CSS
				</div>	
			</div>
		</div>
	</div>
  )
}
