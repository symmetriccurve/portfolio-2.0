import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../markdownViewer/renderers/codeblocks';
import Layout from '../layout/Layout';
import Loader from 'react-loaders';
import 'loaders.css/src/animations/ball-rotate.scss';
import urls from '../data-layer/urls'
export default class iQuestions extends Component {

	state = {
		markDown: []
	};

	componentDidMount() {
			fetch(urls.todayILearned)
			.then(res => {
				return res.text();
			})
			.then(resText => {
				resText = resText.split('---')
				this.setState({
					markDown: this.state.markDown.concat(resText)
				});
			})
			.catch(err => {
				console.log('error', err);
			});
	}

	render() {
		const { markDown } = this.state
		return (
			<Layout>
				<div className='markdown'>
					{
						!markDown.length && 
						<div>
							<Loader className='markdown__loader' type="ball-rotate" />
						</div>	
					}
					{
						markDown.map(each => {
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
