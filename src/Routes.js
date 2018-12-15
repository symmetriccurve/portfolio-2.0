import React from 'react';
import LaunchPage from './launchPage/LaunchPage';
import Blog from './blog/Blog'
import Contact from './contact/Contact'
import Projects from './projects/Projects'
import AboutMe from './aboutMe/AboutMe'
import AsAEngineer from './as-a-engineer/AsAEngineer'
import AsATeacher from './as-a-teacher/AsATeacher'
import TodayILearned from './today-i-learned/TodayILearned'
import Training from './training/Training'
import PetProjects from './pet-projects/PetProjects'

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
				<Route exact path="/projects" component={ Projects }/>
				<Route exact path="/contact" component={ Contact }/>
				<Route exact path="/about-me" component={ AboutMe }/>
				<Route exact path="/as-a-engineer" component={ AsAEngineer }/>
				<Route exact path="/as-a-teacher" component={ Training }/>
				<Route exact path="/today-i-learned" component={ TodayILearned }/>
				<Route exact path="/Training" component={ Training }/>
				<Route exact path="/pet-projects" component={ PetProjects }/>
			</div>
		</HashRouter>
	</div>
    )
}