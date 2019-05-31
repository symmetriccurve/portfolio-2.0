import React, { Component } from 'react'
import Layout from '../layout/Layout'
import {
    Link
} from 'react-router-dom'
export default class Traning extends Component {
    render() {
        return (
	<Layout>
		<div className='my-interview'>
			<h1>Getting Started as a React Developer - Paid Sessions </h1>
			<div>
				<Link to='/training'>
					<span style={ { color:'blue' } }> Course</span>
				</Link>
			</div>
			<a href='https://zoom.us/meeting/register/4c8a20a5fb1e8d7f34538d7d4481ef37'style={ { color:'blue' } }> Registration</a>
			<br />
		</div>
		<div className='my-interview'>
			<div>
				<h1>Resume Making and Interview Tips - Free Session</h1>
			</div>
			<a href='https://zoom.us/meeting/register/2e111d1cf2e46bfd7510d14dfea9e911'style={ { color:'blue' } }> Registration</a>  
			<div><h3>Topics:</h3></div>
			<div>Making a perfect resume.</div>
			<div>Interview tips.</div>
			<div>Frequently asked interview questions</div>
			<div>Online coding tools for frontend developers.</div>
			<div>How to build internet footprint.</div>
		</div>
	</Layout>
        )
    }
}
