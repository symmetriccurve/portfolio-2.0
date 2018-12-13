//{/* eslint-disable */}
/* import React, { Component } from 'react'
import Layout from '../layout/Layout'
import BlogCard from './BlogCard'
import LazyCard from '../components/lazy-card/LazyCard';

var Feed = require('rss-to-json');

Feed.load('https://medium.com/feed/@beldevikram', function(err, rss){
    console.log(rss);
});

//const POSTS_URL = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40beldevikram'
//const POSTS_URL = 'https://medium-json-feed.herokuapp.com/@beldevikram'
//const POSTS_URL = 'https://api.rss2json.com/v1/api.json rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40beldevikram'
//const POSTS_URL = 'http://localhost:3001/medium-post'
const POSTS_URL = 'https://salty-anchorage-97820.herokuapp.com/posts'

export default class Blog extends Component {
  state = {
    posts: []
  }

  componentDidMount(){
    fetch(POSTS_URL)
    .then(res=>res.json())
    .then(resJson=>{
      debugger
      this.setState({
        posts: resJson.item
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
            posts.map(post=><BlogCard post={ post } key={ post.link[ 0 ] }/>)
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
} */

import React, { Component } from 'react'
import Layout from '../layout/Layout'
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
// var HtmlToReactParser = require('html-to-react').Parser;
// var htmlToReactParser = new HtmlToReactParser();
import { EditorState, convertToRaw, ContentState, convertFromRaw } from 'draft-js';
var _ = require('lodash')
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
        question: {},
        editorState:  EditorState.createEmpty(),
    };
  }

  postArticle(){
  const uniqueId = this.state.question.id
  fetch('https://portfolio-18e3f.firebaseio.com/questions/' + uniqueId +'.json',
    {
      method:'PUT',
      body:JSON.stringify({
        htmlMarkUp: draftToHtml(convertToRaw(this.state.editorState.getCurrentContent())),
        rawFormat:  JSON.stringify(convertToRaw(this.state.editorState.getCurrentContent())),
        id: uniqueId
    })
})
}

  onEditorStateChange: Function = (editorState) => {
    this.setState({
      editorState,
    });
  };

  componentDidMount(){
    const URL = 'https://portfolio-18e3f.firebaseio.com/questions/' + '1538866475316' + '.json'
    fetch(URL)
    .then((res)=>res.json())
    .then((resJSON)=>{
      //debugger
      this.setState({
        question: resJSON,
        editorState: EditorState.createWithContent(convertFromRaw(JSON.parse(resJSON.rawFormat)))
      })
    })
  }

  render() {
    const { editorState } = this.state;
    return (
	<Layout>
		<div className='editor'>
			<Editor
              editorState={ editorState }
              style={ { height:'100%',width:'100%' } }
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
              onEditorStateChange={ this.onEditorStateChange }
            />
			{/* <button onClick={ ()=>{this.postArticle()} }>post</button> */}
		</div>
	</Layout>
    );
  }
}
