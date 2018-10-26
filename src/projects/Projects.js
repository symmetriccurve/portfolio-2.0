{/* eslint-disable */}
import React, { Component } from 'react'
import Layout from '../layout/Layout'
import ProjectCard from './ProjectCard'
export default class Blog extends Component {
  render() {
    return (
	<Layout>
		<div>
			<div className="blog__search-bar">
				<input className="blog__search-bar__input" placeholder="Search"/>
			</div>
			<div className="blog__b-cards">
                <ProjectCard />
                <ProjectCard />  
			</div>
		</div>
	</Layout>
    )
  }
}
