{/*eslint-disable */}
import React, { Component } from 'react'
import Layout from '../layout/Layout'
import BlogCard from './BlogCard'
import ReCAPTCHA from 'react-google-recaptcha';

export default class Blog extends Component {
	onChange(value) {
		console.log('Captcha value:', value);
	}
  render() {
    return (
	<Layout>
		<div class="contact">
			<div class="contact__header--getInTouch">
					GET IN TOUCH
			</div>
			<div class="contact__header">
					Shoot an email to
			</div>
			<div class="contact__info">
					belvikram@gmail.com
			</div>
			<div class="contact__header">
					Or ring me on
			</div>
			<div class="contact__info">
					+1-636-224-5062
			</div>
			<div class="contact__OR">
					OR
			</div>
			<div class="contact__greeter">
				<div class="greeter__sentence--my-name">
					{' Hey Vikram, '}
				</div>
				<div class="greeter__sentence">
						this is 
				</div>
				<input class="greeter__input--name" placeholder="Name"/>
				<br />
				<div class="greeter__sentence">
						let's have a quick chat at  
				</div>
				<input class="greeter__input--email" placeholder="Email/Phone"/>
			</div>
			<div className="greeter__send">
					<span className='greeter__send__text'> SEND </span>
				</div>
			{/* <ReCAPTCHA
								sitekey="6Ldu7XYUAAAAADj7U1LjSG8cJ5oHIe6dIWIQEhKK"
								onChange={(value)=>this.onChange(value)}
							/> */}
		</div>
	</Layout>
    )
  }
}
