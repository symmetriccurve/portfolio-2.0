import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import CodeBlock from '../markdownViewer/renderers/codeblocks'
import Layout from '../layout/Layout'
import Loader from 'react-loaders'
import 'loaders.css/src/animations/ball-rotate.scss'
import urls from '../data-layer/urls'
export default class MyInterview extends Component {

	state = {
		markdown: ''
	};

	componentDidMount() {
		fetch(urls.myInterview)
			.then(res => {
				return res.text()
			})
			.then(resText => {
				this.setState({
					markdown: resText,
				});
			})
			.catch(err => {
				console.log('error', err)
			})
	}

	render() {
		const { markdown } = this.state
		return (
			<Layout>
				<div className='my-interview'>
					{
						!markdown &&
						<div>
							<Loader className='markdown__loader' type='ball-rotate' />
						</div>
					}
					<ReactMarkdown
						source={ markdown }
						escapeHtml={ false }
						renderers={ { code: CodeBlock } }
					/>
				</div>
			</Layout>
		)
	}
}
