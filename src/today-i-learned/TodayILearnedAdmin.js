///{/*eslint-disable */}
import React, { Component } from 'react';
import Layout from '../layout/Layout';
// import Editor from '../editor/Editor';
import Editor from 'react-medium-editor';
require('medium-editor/dist/css/medium-editor.css');
require('medium-editor/dist/css/themes/default.css');

export default class Contact extends Component {
	state = {
		text: 'Fusce dapibus, tellus ac cursus commodo'
	}

	handleChange(text, medium) {
		
		this.setState({ text: text });
	}

	render(){
		return(
			<Layout>
				<div className="app">
					<h1>react-medium-editor</h1>
					<h3>Html content</h3>
					<div>{this.state.text}</div>

					<h3>Editor #1 (&lt;pre&gt; tag)</h3>
					<Editor
						text={ this.state.text }
						onChange={ (e,medium)=>this.handleChange(e,medium) }
						/>
				</div>
			</Layout>
		)
	}
}
