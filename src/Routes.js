import React from 'react';
import LaunchPage from './launchPage/LaunchPage';
import Blog from './blog/Blog'
import Contact from './contact/Contact'

import {
    HashRouter,
    Route
  } from 'react-router-dom'

export default ()=>{
    return(
	<div>
		<HashRouter>
			<div>
				<Route exact path="/" component={ LaunchPage }/>
				<Route exact path="/blog" component={ Blog }/>
				<Route exact path="/contact" component={ Contact }/>
			</div>
		</HashRouter>
	</div>
    )
}