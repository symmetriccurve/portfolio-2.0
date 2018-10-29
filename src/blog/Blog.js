//{/* eslint-disable */}
import React, { Component } from 'react'
import Layout from '../layout/Layout'
import BlogCard from './BlogCard'
import LazyCard from '../components/lazy-card/LazyCard';

//const POSTS_URL = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40beldevikram'
const POSTS_URL = 'https://medium-json-feed.herokuapp.com/@beldevikram'
export default class Blog extends Component {
  state = {
    posts: []
  }

  componentDidMount(){
    fetch(POSTS_URL)
    .then(res=>res.json())
    .then(resJson=>{
      this.setState({
        posts: resJson.response
      })
    })
  }
  render() {
    const { posts } = this.state
    return (
	<Layout>
		<div>
			<div className="blog__search-bar">
				<input className="blog__search-bar__input" placeholder="Search"/>
			</div>
			<div className="blog__b-cards">
				{
            posts.map(post=><BlogCard post={ post }/>)
        } 
				{
          !posts.length && 
          <div>
	<LazyCard />
	<LazyCard />
	<LazyCard />
          </div>  
        } 
			</div>
		</div>
	</Layout>
    )
  }
}
