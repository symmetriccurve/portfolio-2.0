import React, { Component } from 'react'
import ShowContentsHOC from '../hoc/ShowContent'
import Layout from '../layout/Layout'
import BlogCard from './BlogCard'

const Blog =  ({ data }) => {
  const blogPosts = []
  for(const key in data){
    blogPosts.push(data[ key ])
  }
  return (
	<Layout>
		<div>
			{
        blogPosts.map(eachBlogPost=>{
          return <BlogCard blogPost={ eachBlogPost } / >
        })
      }
		</div>
	</Layout>
  )
}

const BlogWithData = ShowContentsHOC(Blog,'https://portfolio-18e3f.firebaseio.com/questions.json')

export default BlogWithData
