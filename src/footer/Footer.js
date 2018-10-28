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
				<NavLink to='/blog' activeClassName="links__link--active links__link">
						Blog
				</NavLink>
				<span className="links__link--seperator">|</span>
				<NavLink  exact to='/projects' activeClassName="links__link--active links__link">
						Projects
				</NavLink>
				<span className="links__link--seperator">|</span>
				<a href="https://github.com/symmetriccurve/">
					<span className="links__link">Code</span>
				</a>
				<span className="links__link--seperator">|</span>
				<NavLink  exact to='/contact' activeClassName="links__link--active links__link">
						Contact
				</NavLink>
				<span className="links__link--seperator">|</span>
				<NavLink  exact to='/about-me' activeClassName="links__link--active links__link">
						Picturize Me
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
