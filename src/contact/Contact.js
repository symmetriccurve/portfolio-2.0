{/* eslint-disable */}
import React, { Component } from 'react'
import Layout from '../layout/Layout'
import BlogCard from './BlogCard'
export default class Blog extends Component {
  render() {
    return (
	<Layout>
		<div>
			Email : belvikram@gmail.com 
			Mobile : +1-636-224-5062
			( This page is under design stage. .)
			<div className="g-recaptcha" data-sitekey="6Ldu7XYUAAAAADj7U1LjSG8cJ5oHIe6dIWIQEhKK"></div>
		</div>
	</Layout>
    )
  }
}
