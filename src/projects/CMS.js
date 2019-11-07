import React from 'react'

export default () =>
{
	return (
		<div className="p-cards__p-card">
			<div className="p-card__date">
				<span className="p-card__date-text">
					Sept 2017 to Jan 2019
				</span>
			</div>
			<div className="p-card__body">
				<div className="p-card__title">
					<span className="p-card__title-text">
						Verizon Communication Inc, Texas
					</span>
				</div>
				<div className="p-card__title">
					<span className="p-card__title-text">
						Project - <span className="p-card__title-text--project-name">Content Management Systems</span>
					</span>
				</div>
				<div className="p-card__description">
					<span className="p-card__description-text">
						<ul>
							<li>Designed and Implemented Content Management System portal from the scratch including the wireframes’</li>
							<li>Extensively worked on the Elastic Search including mappings and constructing JSON based queries on the fly as user type the query.</li>
							<li>Extensive usage of ECMAscript(ES6 or EcmaScript 2015) features and integration of babel to transpile the JSX syntax to JS.</li>
							<li>Created Higher Order Components to re use the component Logic and document the usage for integration into other web apps. </li>
							<li>Created Reusable Components to share across the CMS platform and documented the usage and maintained in private npm registry</li>
							<li>Integrated Advanced search with auto complete feature to make complex query structures(elasticsearch query-string-query)</li>
							<li>Maintained Dev, Test and Prod environments using Docker Images simultaneously deploying and maintaining the Instances</li>
							<li>Handled versioning of the application, releases and documented the user guide</li>
							<li>Extensive usage of Redux, Redux dev-tools and time travel  to manage the state</li>
							<li>Implemented node reverse proxy to forward UI requests to backend APIs using express and nodejs to resolve CORS issues.</li>
							<li>Integrated ability to download the application state as a JSON file to ease bug fixing and undes</li>
							<li>Implemented URL integration with Redux state and create URL from App state and ability to recreate the state from the URL.(Updating the redux store parsing the URL)</li>
							<li>Extensively worked on react-router to create powerful dynamic routes using hash history</li>
							<li>Integrated line charts using react d3 chart library with ability to snapshot/download charts based on timeline.</li>
							<li>Extensively worked on videojs to integrate live stream and play pre recorded videos for tagging</li>
							<li>Added ability to download selected rows/asset information as a  CSV file </li>
							<li>Integrated React-Data-Grid to list the data and handle user selections</li>
							<li>Integrated Webpack to build and bundle the application and manage environment profiles and integrated webpack-dev-server for hot reloading.</li>
						</ul>
					</span>
				</div>
				<div className='p-card__tech-stack'>
					<div className='tech-stack__title'>
						Technical Stack
					</div>
					<div className='tech-stack__body'>
						Reactjs, ES6, babel, Redux, react-router(V4), react-select, react-data-grid, React D3, react-autocomplete, videojs, Google SSO, Webpack, Webpack-dev-server SASS, Bootstrap, npm, nodejs, Express, Docker, NgInx, elasticsearch, Javascript, HTML and  CSS.
					</div>
				</div>
			</div>
		</div>
	)
}
