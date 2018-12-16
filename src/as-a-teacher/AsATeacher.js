import React, { Component } from 'react';
import Layout from '../layout/Layout';

export default class AsATeacher extends Component {
	render(){
		return(
			<Layout>
				<div className="teacher">
					I strongly believe, "Teaching is one the best ways to learn", it helps me to gain a different
					perspective if unless I would never imagine. 
					<iframe width="560" height="315" src="https://www.youtube.com/embed/U5VyZPTUzM4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				</div>
			</Layout>
		)
	}
}
