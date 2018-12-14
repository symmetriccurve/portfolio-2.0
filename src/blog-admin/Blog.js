import React, { Component } from 'react'
import Layout from '../layout/Layout'
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
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
