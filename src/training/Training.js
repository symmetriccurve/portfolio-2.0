{/*eslint-disable */}
import React, { Component } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import Layout from '../layout/Layout';
const emailURL = 'https://script.google.com/macros/s/AKfycbyCnHfXJPBCQm17nGdtLa0immNulKNNJHzwWvyNhRg2bdIPmaU/exec'

export default class Contact extends Component {

	render(){
		return(
			<Layout>
				<div className='train'>
					<a href="https://goo.gl/fHftTL">Training Details</a>
				</div>	
			</Layout>
		)
	}
}
