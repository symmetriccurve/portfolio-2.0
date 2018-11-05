{/*eslint-disable */}
import React, { Component } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import Layout from '../layout/Layout';
const emailURL = 'https://script.google.com/macros/s/AKfycbyCnHfXJPBCQm17nGdtLa0immNulKNNJHzwWvyNhRg2bdIPmaU/exec'

export default class Contact extends Component {
	state = {
		greeterName: '',
		contactDetail: '',
		isCaptchaValidated: false,
		messageStatus: 'not sent'
	}

	onChange(value) {
		this.setState({
			isCaptchaValidated: true
		})
		console.log('Captcha value:', value);
	}

	validateFields(){
		const { greeterName, contactDetail,isCaptchaValidated } = this.state
		//FIXME: validate name and  email or phone
		return greeterName && contactDetail && isCaptchaValidated
	}

	handleSend(){
		const { greeterName, contactDetail,isCaptchaValidated } = this.state
		if(greeterName && contactDetail && isCaptchaValidated){

			const formData = new FormData();
			formData.append('greeterName', greeterName);
			formData.append('contactDetail', contactDetail);

			fetch(emailURL,{
				body: formData,
				method: 'post'
			}).then(res=>{
				this.setState({
					messageStatus: 'successfully sent'
				})					
			}).catch(err=>{
				this.setState({
					messageStatus: 'sent failed'
				})
			})
		}
	}

	renderGreeterBlock(){
		const { greeterName, contactDetail, messageStatus } = this.state
		if(messageStatus == 'successfully sent'){
			return(
				<div className="greeter__success">
					<div className="success__text">
						Message Sent Successfully 
					</div>
				</div>
			)
		}

		return(
			<div>
				<div className="contact__OR">
						OR
				</div>
				<div className="contact__greeter">
					<div className="greeter__sentence--my-name">
						{' Hey Vikram, '}
					</div>
					<div className="greeter__sentence">
							this is 
					</div>
					<input value={ greeterName } name="greeterName" onChange={ (event)=>this.handleChange(event) } className="greeter__input--name" placeholder="Name"/>
					<br />
					<div className="greeter__sentence">
							let's have a quick chat at  
					</div>
					<input value={ contactDetail } name="contactDetail" onChange={ (event)=>this.handleChange(event) } className="greeter__input--email" placeholder="Email/Phone"/>
				</div>
				<div className="greeter__captcha">
					<ReCAPTCHA
					sitekey="6Ldu7XYUAAAAADj7U1LjSG8cJ5oHIe6dIWIQEhKK"
					onChange={ (value)=>this.onChange(value) }
				/>
				</div>
				{
					this.validateFields() ?
						<div className="greeter__send" onClick={ ()=>this.handleSend() }>
							<span className="greeter__send__text"> SEND </span>
						</div> :
						<div className="greeter__send">
							<span className="greeter__send__text--inactive"> SEND </span>
						</div>

				}
			</div>			
		)
	}

	handleChange(event){
		const { name,value } = event.target
		this.setState({
			[ name ]: value
		})
	}

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
