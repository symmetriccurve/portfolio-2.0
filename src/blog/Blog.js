{/* eslint-disable */}
import React, { Component } from 'react'
import Layout from '../layout/Layout'
import BlogCard from './BlogCard'
export default class Blog extends Component {
  render() {
    return (
	<Layout>
		<div>
			<div className="blog__search-bar">
				<input className="blog__search-bar__input" placeholder="Search"/>
			</div>
			<div className="blog__b-cards">
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />   
			</div>
		</div>
	</Layout>
    )
  }
}
