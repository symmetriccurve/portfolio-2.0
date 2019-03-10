import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import CodeBlock from './renderers/codeblocks'
export default class MarkDownViewer extends Component {

	state = {
		markDown: []
	};

	componentDidMount() {
		fetch(this.props.urlToPullMarkDownFrom)
			.then(res => {
				return res.text();
			})
			.then(resText => {
				resText = resText.split('---')
				this.setState({
					markDown: resText
				});
			})
			.catch(err => {
				console.log('error', err);
			});
	}
	render() {
		return (
			<div className='markdown'>
				{
					this.state.markDown.map(each => {
						return (
							<div className='markdown__card'>
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
		)
	}
}
