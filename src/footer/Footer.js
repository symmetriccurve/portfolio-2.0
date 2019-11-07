import React, { Component } from 'react'

import
{
	NavLink
} from 'react-router-dom'

export default class componentName extends Component
{

	state = {
		lastUpdatedOn: 'December 14 2018'
	}

	componentDidMount()
	{
		fetch('https://api.github.com/repos/symmetriccurve/portfolio-2.0/commits/master')
			.then(res => res.json())
			.then(res =>
			{
				/*  
				 	Date is in UTC format : 2018-12-11T18:57:07Z 
					toString does to "Tue Dec 11 2018 13:57:07 GMT-0500 (Central Daylight Time)"
					slice it to make "Dec 11 2018"
				*/

				let lastUpdatedOn = new Date(res.commit.committer.date)
				lastUpdatedOn = lastUpdatedOn.toString().slice(4, -42)
				this.setState({
					lastUpdatedOn
				})
			})
	}

	render()
	{
		const { lastUpdatedOn } = this.state
		return (
			<div className="footer">
				<div className="footer__left">
					Copyright © 2019 Vikram Belde. All rights reserved
					<span className="footer__left--lastUpdatedOnText">
						(Last Updated on {lastUpdatedOn})
					</span>
				</div>
				<div className='footer__right'>
					<div className="footer__links">
						{/* <NavLink exact to='/as-a-engineer' activeClassName="links__link--active links__link">
							As a Engineer
						</NavLink>
						<span className="links__link--seperator">|</span>
						<NavLink exact to='/as-a-teacher' activeClassName="links__link--active links__link">
							As a Teacher
						</NavLink>
						<span className="links__link--seperator">|</span>
						<NavLink exact to='/today-i-learned' activeClassName="links__link--active links__link">
							Today I Learned
						</NavLink> */}
						{/* <span className="links__link--seperator">|</span>
					<a href="https://www.linkedin.com/in/vikrambelde/">
						<span className="links__link">LinkedIn</span>
					</a>	 */}
					</div>
				</div>
			</div>
		)
	}
}
