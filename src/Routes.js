import React from 'react';
import LaunchPage from './launchPage/LaunchPage';
import Blog from './blog/Blog'
import Editor from './editor/Editor'
import Contact from './contact/Contact'
import Projects from './projects/Projects'
import MyInterview from './myInterview/MyInterview'
import AsAEngineer from './as-a-engineer/AsAEngineer'
import AsATeacher from './as-a-teacher/AsATeacher'
import TodayILearned from './today-i-learned/TodayILearned'
import Training from './training/Training'
import PetProjects from './pet-projects/PetProjects'
import IQuestions from './i-questions/IQuestions'
import Register from './register/Register'

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
				<Route exact path="/my-interview" component={ MyInterview }/>
				<Route exact path="/as-a-engineer" component={ AsAEngineer }/>
				<Route exact path="/as-a-teacher" component={ AsATeacher }/>
				<Route exact path="/today-i-learned" component={ TodayILearned }/>
				<Route exact path="/Training" component={ Training }/>
				<Route exact path="/interviewQuestions" component={ IQuestions }/>
				<Route exact path="/pet-projects" component={ PetProjects }/>
				<Route exact path="/editor" component={ Editor }/>
				<Route exact path="/register" component={ Register }/>
			</div>
		</HashRouter>
	</div>
    )
}