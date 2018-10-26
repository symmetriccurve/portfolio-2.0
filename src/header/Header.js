import React from 'react'

import {
  NavLink
} from 'react-router-dom'

export default () => {
  return(
	  <div class="header">
		<NavLink to='/'>
			<div class="header__logo">
				<div class="logo__name">
            Vikram
				</div>
        &nbsp;
				<div class="logo__name--last">
            Bel
				</div>
			</div>
		</NavLink>
		<div class="header__links">
			<NavLink to='/blog' activeClassName="links__link--active links__link">
				Blog
			</NavLink>
			<span class="links__link--seperator">|</span>
			<NavLink  exact to='/projects' activeClassName="links__link--active links__link">
				Projects
			</NavLink>
			<span class="links__link--seperator">|</span>
			<a href="https://github.com/symmetriccurve/">
				<span class="links__link">Code</span>
			</a>
			<span class="links__link--seperator">|</span>
			<NavLink  exact to='/contact' activeClassName="links__link--active links__link">
				Contact
			</NavLink>
			{/* <span class="links__link--seperator">|</span>
			<a href="https://www.linkedin.com/in/vikrambelde/">
				<span class="links__link">LinkedIn</span>
			</a>	 */}
		</div>
	  </div>
  )
}
