import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import CodeBlock from './renderers/codeblocks'
export default class MarkDownViewer extends Component {

	state = {
		markDown: this.props.fallbackMarkDown
	};

	componentDidMount() {
		fetch(this.props.urlToPullMarkDownFrom)
			.then(res => {
				return res.text();
			})
			.then(resText => {
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
				<ReactMarkdown
					source={ this.state.markDown }
					escapeHtml={ false }
					renderers={ { code: CodeBlock } }
				/>
			</div>
		)
	}
}
