import React, { Component } from 'react'
import ShowContentsHOC from '../hoc/ShowContent'
import Loader from 'react-loaders';
import ReactMarkdown from 'react-markdown'
import CodeBlock from '../markdownViewer/renderers/codeblocks';
import Layout from '../layout/Layout'
import urls from '../data-layer/urls'
export default class Blog extends Component {

	state = {
		postsAsText: []
	};

	componentDidMount() {
		fetch(urls.blog)
			.then(res => res.json())
			.then(resText => {
				resText.forEach(each => {
					fetch(each.download_url)
						.then(post => post.text())
						.then(postAsText => {
							this.setState({
								postsAsText: [ ...this.state.postsAsText, postAsText ]
							})
						})
						.catch(err => {
							console.log('error', err);
						})
				})
			})
			.catch(err => {
				console.log('error', err);
			})
	}

	render() {
		const { postsAsText } = this.state
		return (
			<Layout>
				<div className='markdown'>
					{
						!postsAsText.length &&
						<div>
							<Loader className='markdown__loader' type="ball-rotate" />
						</div>
					}
					{
						postsAsText.map(each => {
							return (
								<div className='markdown__card' key={ each }>
									<ReactMarkdown
										source={ each }
										escapeHtml={ false }
										renderers={ { code: CodeBlock } }
									/>
								</div>
							)
						})
					}
				</div>
			</Layout>
		)
	}
}