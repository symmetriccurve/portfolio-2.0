import React from 'react'

import {
  NavLink
} from 'react-router-dom'

export default () => {
  return(
	<div className="footer">
		<div className="footer__left">
			Copyright © 2018 Vikram Belde. All rights reserved.
		</div>
		<div className='footer__right'>		
			<div className="footer__links">
				<NavLink  exact to='/as-a-engineer' activeClassName="links__link--active links__link">
						As a Engineer
				</NavLink>
				<span className="links__link--seperator">|</span>
				<NavLink  exact to='/as-a-teacher' activeClassName="links__link--active links__link">
						As a Teacher
				</NavLink>
				<span className="links__link--seperator">|</span>
				<NavLink  exact to='/today-i-learned' activeClassName="links__link--active links__link">
						Today I Learned
				</NavLink>
				{/* <span className="links__link--seperator">|</span>
					<a href="https://www.linkedin.com/in/vikrambelde/">
						<span className="links__link">LinkedIn</span>
					</a>	 */}
			</div>
		</div>		
	</div>
  )
}
