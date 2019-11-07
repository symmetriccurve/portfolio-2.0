import React from 'react'

export default () =>
{
	return (
		<div className="p-cards__p-card">
			<div className="p-card__date">
				<span className="p-card__date-text">
					Feb 2019 to Present
				</span>
			</div>
			<div className="p-card__body">
				<div className="p-card__title">
					<span className="p-card__title-text">
						Intuit, Texas
					</span>
				</div>
				<div className="p-card__title">
					<span className="p-card__title-text">
						Project - <span className="p-card__title-text--project-name">ProConnect Tax online</span>
					</span>
				</div>
				<div className="p-card__description">
					<span className="p-card__description-text">
						<ul>
							<li>Part of horizontal CORE TEAM(AppFabric) which establishes patterns and work flows for other verticals across ProConnect. </li>
							<li>1 of 3 person team on production support during the busiest time of the year and fixed multiple P0 and P1 to meet SLAs. </li>
							<li>Make enhancements and fixes on Fuego.js - a json driven declarative UI framework written in React that powers all the tax forms across intuit(including TurboTax)</li>
							<li>Collaborate with multiple departments(Tax content department, Tax conversion Department) to ensure the use cases and established user experience workflows.</li>
							<li>Extensively contribute towards rewriting the business logic towards migration from Angular to React and enhancing the user experience with respect to IDS(Intuit Design System).</li>
							<li>Contribute into multiple code bases collaborating with 8 different teams and plan on the production release dates.</li>
							<li>Configure pre-commit hooks to enforce indentation, eslint rules and commit message formatting. </li>
							<li>Extended the product availability globally using react-intl to ensure ProConnect can be adapted in various languages.</li>
							<li>Collaborate with the UX team(Design Team) to validate the implementation and propose possible solutions to accommodate the design requirements.</li>
							<li>Collaborate with the QA team to hand off the builds for validations and make the fix towards the release branch.</li>
							<li>Handing off builds to the release teams and streamline the releases and update the release notes and change logs.</li>
							<li>Contribute towards inhouse tools that enhance the Design/Developer/QA team experiences. </li>
							<li>Document component usage and examples using storybook and confluence documents</li>
						</ul>
					</span>
				</div>
				<div className='p-card__tech-stack'>
					<div className='tech-stack__title'>
						Technical Stack
					</div>
					<div className='tech-stack__body'>
						Reactjs, ES6, babel, Redux, reselect, Webpack, Webpack-dev-server Enzyme, Jest, Chai, Mocha,, sass, Bootstrap, npm, nodejs, husky, renovate, cypress, jenkins, storybook, invision, sketch, react-intl, Java, Javascript, HTML and SCSS.
					</div>
				</div>
			</div>
		</div>
	)
}
