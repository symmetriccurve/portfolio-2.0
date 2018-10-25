import React from 'react'

import {
  Link
} from 'react-router-dom'

export default () => {
  return(
	  <div class="header">
		<Link to='/'>
			<div class="header__logo">
				<div class="logo__name">
            Vikram
				</div>
        &nbsp;
				<div class="logo__name--last">
            Bel
				</div>
			</div>
		</Link>
		<div class="header__links">
			<span class="links__link"> PortFolio</span>
			<span class="links__link--seperator">|</span>
			<a href="https://github.com/symmetriccurve/">
				<span class="links__link">Code</span>
			</a>
			<span class="links__link--seperator">|</span>
			<a href="https://www.linkedin.com/in/vikrambelde/">
				<span class="links__link">LinkedIn</span>
			</a>	
		</div>
	  </div>
  )
}
