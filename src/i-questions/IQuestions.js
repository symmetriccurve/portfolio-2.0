import React, { Component } from 'react';
import Layout from '../layout/Layout';
import Viewer from '../markdownViewer/MarkdownViewer'
import urls from '../data-layer/urls.json'

export default class Training extends Component {
    
	render() {
		return (
			<Layout>
				<Viewer urlToPullMarkDownFrom={ urls.iQuestions } fallbackMarkDown={ '' }/>	
			</Layout>
		)
	}
}
