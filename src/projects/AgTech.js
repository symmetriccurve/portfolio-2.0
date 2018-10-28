import React from 'react'

export default () => {
  return (
	<div className="p-cards__p-card">
		<div className="p-card__date">
			<span className="p-card__date-text"> 
				Jan 2017 to June 2017 
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
					Project - <span className="p-card__title-text--project-name">AgTech (Agricultural Technology)</span> 
				</span> 
			</div>
			<div className="p-card__description">
				<span className="p-card__description-text">
					<ul>
						<li>Extensively worked on React-native maps to draw shapes on Google Maps.</li>
						<li>Developed free hand drawing module(Area selector) based on drag gesture both on iOS and Android</li>
						<li>Integrated Developed modules into various platform apps and enhanced the feature</li>
						<li>Developed reusable UI Components and documented the usage with prop validation</li>
						<li>Handled Module versioning and release notes and fixes</li>
						<li>Added ability to drop markers on precise coordinates(latitudes and longitudes)</li>
						<li>Draw overlapping polygons and restrict draw area</li>
						<li>Restrict drop marker outside of polygon and recommend a nearest point within the polygon to accomplish the area</li>
						<li>Extensively worked on Platform Maps to render markers (Devices Deployed), polylines(Routes) and polygons(Device Awareness) using Geo-fence Coordinates</li>
						<li>Used ArgGIS to calculate the areas and lengths of the selected area</li>
						<li>Used ArgGIS to calculate the areas and lengths of the selected area</li>
						<li>Integrated Google direction and routes APIs </li>
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
