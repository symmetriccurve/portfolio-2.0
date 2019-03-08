import React, { Component } from 'react';
import Layout from '../layout/Layout';
import Viewer from '../markdownViewer/MarkdownViewer'
import urls from '../data-layer/urls.json'
import trainingMarkDown from './training.md'
export default class Traning extends Component {
	render() {
		return (
			<Layout>
				<Viewer urlToPullMarkDownFrom={ urls.training } fallbackMarkDown={ trainingMarkDown }/>	
				{/* <div className='train'>
					<p className='train__details'>
						<p className='details__i-believe'> I strongly believe, <span className='bold'>"Teaching is one the best ways to learn"</span>, it helps me to gain a different perspective if unless I would never imagine. </p>
						With increase in demand for more robust web application, companies are moving towards single page applications and adding server side rendering strategies. With ReactJs, this comes out of the box.
						<br />
						<br />
						Within few years of it’s release, ReactJs blown other <a target='_blank' href='https://zendev.com/2018/06/19/react-usage-beating-vue-angular.html'>UI Frameworks</a>. Learn ReactJs today to enhance your skills and increase your job search spectrum,
						<br />
						<br />
						<span className='bold underline'>About Trainer </span>
						<br />
						<br />
						I have <span className='bold'>Designed/Developed/Deployed Production ready applications over 5 years both on web and <a href='https://itunes.apple.com/us/developer/vikram-belde/id1164307305' target='_blank'>mobile </a>platforms.</span>
						<br />
						<br />
						Apart from building things, I love to teach. Combining my profession with my passion to teach made me a UI trainer. I have mentored, supported and trained more than 200 students/developers over a span of 2 years.
						I am working with Reactjs for over 3 years now, and I enjoy training this technology from the ground up.
						<br />
						<br />
						I can train the students who are familiar with HTML, CSS and Javascript as React Developers in 2 weeks time, by the end of the course students should able to debug and breakdown a complex real-time application, since React is all about building blocks based on State and Props, we master them during the session.
						<br />
						<br />
						I do not believe in concrete curriculum, I discuss with the students ahead of training and design my curriculum according to their expectations from the course. What I believe is, a standard course structure might repeat the things that the students already know about, this would kill a lot of interactive time.
						I make use of  huge number of illustrations/diagram during training sessions to break complex workflows and provide visual shortcuts to the subject
						<br />
						<br />
						The training includes interview questions, everyday quizzes , assignments and workshops, mock interviews, and keen focus on every student. Every session is recorded and provided lifetime access with provided email address.
						<br />
						<br />
						<span className='bold underline'>Additionally: </span>
						<ul>
							<li>Provided notes from every session</li>
							<li>Technical review of the resume</li>
							<li>Access to paid course for 1-month after the completion of the course to encourage students on further learning</li>
							<li>Sample Resumes and Resume formatting tool</li>
							<li>Added to technical community group to get technical questions answered and build network</li>
						</ul>
						<span className='bold underline'>Duration: </span>
						<ul>
							<li>20 hours course, Monday to Friday</li>
							<li> 2 hours daily</li>
							<li>1 hour 30 minutes of coding/lecture and 30 minutes of question and answer session</li>
						</ul>
						<span className='bold underline'>Course Fee: </span>
						<br />
						<ul>
							<li>Free</li>
						</ul>
						<br />
						<a href="https://goo.gl/fHftTL">Course Structure</a>
						<p> For More details drop an email to <a href='mailto:aksharnow@gmail.com'>aksharnow@gmail.com </a>
							or call me at +1 636-224-5062
						</p>
						<br />
						<span className='bold underline'>Previous Sessions</span>
						<br />
						<br />

						<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PL0E9KS54ZJocKl4-Hx6k2qsqPAkQs8RA0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					</p>
				</div> */}
			</Layout>
		)
	}
}
