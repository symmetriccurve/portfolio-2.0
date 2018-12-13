//{/* eslint-disable */}
// import React, { Component } from 'react'
// import Layout from '../layout/Layout'
// import BlogCard from './BlogCard'
// import LazyCard from '../components/lazy-card/LazyCard';

// var Feed = require('rss-to-json');

// Feed.load('https://medium.com/feed/@beldevikram', function(err, rss){
//     console.log(rss);
// });

// //const POSTS_URL = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40beldevikram'
// //const POSTS_URL = 'https://medium-json-feed.herokuapp.com/@beldevikram'
// //const POSTS_URL = 'https://api.rss2json.com/v1/api.json rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40beldevikram'
// //const POSTS_URL = 'http://localhost:3001/medium-post'
// const POSTS_URL = 'https://salty-anchorage-97820.herokuapp.com/posts'

// export default class Blog extends Component {
//   state = {
//     posts: []
//   }

//   componentDidMount(){
//     fetch(POSTS_URL)
//     .then(res=>res.json())
//     .then(resJson=>{
//       this.setState({
//         posts: resJson.item
//       })
//     })
//   }
//   render() {
//     const { posts } = this.state
//     return (
// 	<Layout>
// 		<div>
// 			<div className="blog__search-bar">
// 				<input className="blog__search-bar__input" placeholder="Search"/>
// 			</div>
// 			<div className="blog__b-cards">
// 				{
//             posts.map(post=><BlogCard post={ post } key={ post.link[ 0 ] }/>)
//         } 
// 				{
//           !posts.length && 
//           <div>
// 	<LazyCard />
// 	<LazyCard />
// 	<LazyCard />
//           </div>  
//         } 
// 			</div>
// 		</div>
// 	</Layout>
//     )
//   }
// }

import React, { Component } from 'react'
//import { Tabs, Tab, button } from 'react-bootstrap'
// import AboutMe from './AboutMe'
//import posts from './posts'
export default class Blog extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      questions: []
    };
  }

  componentDidMount() {
    fetch('https://portfolio-18e3f.firebaseio.com/questions.json')
      .then((res) => res.json())
      .then((resJSON) => {
        const questions = []
        debugger
        for(const key in resJSON){
          questions.push(resJSON[ key ])
        }
        this.setState({
          questions
        })
      })
  }

  handlePostToAPI() {
    fetch('https://portfolio-18e3f.firebaseio.com/questions.json',
      {
        method: 'PUT',
        body: JSON.stringify(this.state.questions)
      })
  }

  handleSelect(key) {
    //alert(`selected ${key}`);
    this.setState({ key });
  }

  handleEdit(index) {
    const questions = this.state.questions
    questions[ index ].isEditing = true
    this.setState({
      questions
    })
  }

  handleDone(index) {
    const questions = this.state.questions
    questions[ index ].isEditing = false
    this.setState({
      questions
    })
  }

  handleQuestionInput(e, index) {
    const questions = this.state.questions
    questions[ index ].question = e.target.value
    this.setState({
      questions
    })
  }

  handleAnswerInput(e, index) {
    const questions = this.state.questions
    questions[ index ].answer = e.target.value
    this.setState({
      questions
    })
  }

  handleAddQuestion() {
    const questions = this.state.questions
    questions.push({ question: 'your question goes here', answer: 'your answer here', isEditing: true })
    this.setState({
      questions
    })
  }

  render() {
  //   return (
	// <div style={ { marginTop: '3%', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '10%', paddingBottom: '10%', paddingLeft: '5%', paddingRight: '5%', marginLeft: '3%', marginRight: '3%', backgroundColor: 'white', boxShadow: '0 2px 10px 0 rgba(0, 0, 0, 0.16' } }>
	// 	<span className='normal-text'> Out of Ink, will update soon !</span>
	// </div>
  //   )
    return (
	<div style={ { width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' } }>
		<div style={ { width: '90%' } }>
			{
            this.state.questions.map((eachQuestion, index) => {
              if (eachQuestion.isEditing) {
                return (
	<div style={ { marginTop: '20px', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', boxShadow: '0 2px 10px 0 rgba(0, 0, 0, 0.16' } }>
		<hr />
		<span className='large-text'>Question</span>
		<div>
			<textarea style={ { width: '1000px' } } value={ eachQuestion.question } onChange={ (e) => { this.handleQuestionInput(e, index) } } />
		</div>
		<span className='large-text'>Answer</span>
		<div>
			<textarea style={ { width: '1000px', height: '200px' } } value={ eachQuestion.answer } onChange={ (e) => { this.handleAnswerInput(e, index) } } />
		</div>
		<div>
			<button onClick={ () => { this.handleDone(index) } }>Done</button>
		</div>
		<hr />
	</div>
                )
              }
              return (
	<div style={ { paddingTop: '20px', paddingBottom: '20px', marginTop: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', boxShadow: '0 2px 10px 0 rgba(0, 0, 0, 0.16' } }>
		<hr />
		<span className='large-text'>Question</span>
		<div>
			{eachQuestion.question}
		</div>
		<span className='large-text'>Answer</span>
		<div>
			{eachQuestion.answer}
		</div>
		<div>
			<button onClick={ () => { this.handleEdit(index) } }>Edit</button>
		</div>
	</div>
              )
            })
          }
			<div style={ { width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' } }>
				<div className='m-t-2'>
					<button onClick={ () => { this.handleAddQuestion() } }>Add another Question</button>
				</div>
				<div className='m-t-2'>
					<button onClick={ () => { this.handlePostToAPI() } }>Post</button>
				</div>
			</div>
		</div>
	</div>
    );
  }
}

// import React, { Component } from 'react'
// import { Editor } from 'react-draft-wysiwyg';
// import draftToHtml from 'draftjs-to-html';
// // var HtmlToReactParser = require('html-to-react').Parser;
// // var htmlToReactParser = new HtmlToReactParser();
// import { EditorState, convertToRaw, ContentState, convertFromRaw } from 'draft-js';
// var _ = require('lodash')
// import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
// export default class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//         question: {},
//         editorState:  EditorState.createEmpty(),
//     };
//   }

//   postArticle(){
//   const uniqueId = this.state.question.id
//   fetch('https://portfolio-18e3f.firebaseio.com/questions/' + uniqueId +'.json',
//     {
//       method:'PUT',
//       body:JSON.stringify({
//         htmlMarkUp: draftToHtml(convertToRaw(this.state.editorState.getCurrentContent())),
//         rawFormat:  JSON.stringify(convertToRaw(this.state.editorState.getCurrentContent())),
//         id: uniqueId
//     })
// })
// }

//   onEditorStateChange: Function = (editorState) => {
//     this.setState({
//       editorState,
//     });
//   };

//   componentDidMount(){
//     const URL = 'https://portfolio-18e3f.firebaseio.com/questions/' + '1538866475316' + '.json'
//     fetch(URL)
//     .then((res)=>res.json())
//     .then((resJSON)=>{
//       debugger
//       this.setState({
//         question: resJSON,
//         editorState: EditorState.createWithContent(convertFromRaw(JSON.parse(resJSON.rawFormat)))
//       })
//     })
//   }

//   render() {
//     const { editorState } = this.state;
//     return (
// 	<div>
// 		<Editor
//         editorState={ editorState }
//         style={ { height:'100%',width:'100%' } }
//         wrapperClassName="demo-wrapper"
//         editorClassName="demo-editor"
//         onEditorStateChange={ this.onEditorStateChange }
//       />
// 		<button onClick={ ()=>{this.postArticle()} }>post</button>
// 	</div>
//     );
//   }
// }
