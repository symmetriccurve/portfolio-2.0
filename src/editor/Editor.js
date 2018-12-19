import React, { Component } from 'react'
import Layout from '../layout/Layout'
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import Button from '../common/button/Button'
import { EditorState, convertToRaw, ContentState, convertFromRaw } from 'draft-js';
var _ = require('lodash')
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
        contentURL: '',
        editorState:  EditorState.createEmpty(),
    };
  }

  postContent(){
    const { blogPost, onCancel } = this.props
    const URL = `https://portfolio-18e3f.firebaseio.com/questions/${ blogPost.id }.json`
    fetch(URL,
      {
        method:'PUT',
        body:JSON.stringify({
          htmlMarkUp: draftToHtml(convertToRaw(this.state.editorState.getCurrentContent())),
          rawFormat:  JSON.stringify(convertToRaw(this.state.editorState.getCurrentContent())),
          id: blogPost.id
      })
    })
    .then(()=>{
      onCancel()
    })
}

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  componentDidMount(){
    const { blogPost } = this.props
    const URL = `https://portfolio-18e3f.firebaseio.com/questions/${ blogPost.id }.json`
    fetch(URL)
    .then((res)=>res.json())
    .then((resJSON)=>{
      this.setState({
        editorState: EditorState.createWithContent(convertFromRaw(JSON.parse(resJSON.rawFormat)))
      })
    })
  }

  render() {
    const { editorState } = this.state
    const { onCancel } = this.props
    console.log("this", this.props)
    return (
	<div className='editor'>
		<div className='editor__edit'>
			<Editor
              editorState={ editorState }
              style={ { height:'100%',width:'100%' } }
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
              onEditorStateChange={ this.onEditorStateChange }
            />
		</div>      
		<div className='editor__footer'>
			<div className='footer__button'>
				<Button label={ "Cancel" } onClick={ ()=>onCancel() }/>
			</div>
			<div className='footer__button'>
				<Button label={ "Save" } onClick={ ()=>{this.postContent()} }/>
			</div>
		</div>
	</div>
    );
  }
}
