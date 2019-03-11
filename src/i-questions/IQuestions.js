import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../markdownViewer/renderers/codeblocks';
import Loader from 'react-loaders';
import 'loaders.css/src/animations/ball-rotate.scss';
import urls from '../data-layer/urls'
export default class iQuestions extends Component {

	state = {
		react: [],
		html: [],
		css :[],
		js:[],
		searchStr: '',
		filtered: []
	};

	componentDidMount() {
		urls.iQuestions.forEach((eachURL,index)=>{
			fetch(eachURL)
			.then(res => {
				return res.text();
			})
			.then(resText => {
				resText = resText.split('---')
				this.setState({
					react: this.state.react.concat(resText),
					filtered: this.state.react.concat(resText)
				});
			})
			.catch(err => {
				console.log('error', err);
			});
		})
		
	}

	handleSearch(e){
		const { react, html, css, javascript } = this.state
		const { value } = e.target
		const filtered = []
		this.setState({
			searchStr: value
		})

		react.forEach(each=>{
			if(each.toLowerCase().indexOf(value.toLowerCase()) > -1 ){
				//each = each.replace(value,`<mark>${ value }</mark>`)
				/* 
					TO-DO: FIX SEARCH
					This highlight is not highlighting capital case match and replacing
					text with in the code(A BIG NO NO)
				*/
				filtered.push(each)
			}
		})

		this.setState({
			filtered
		})
		
	}

	render() {
		const { searchStr, filtered, react, html, css, javascript } = this.state
		return (
			<div className='markdown'>
				<div className="markdown__search-bar">
					<input className="markdown__search-bar__input" placeholder='Search' value={ searchStr } onChange={ e=>this.handleSearch(e) } />
				</div>
				{
					!react.length && 
					<div>
						<Loader className='markdown__loader' type="ball-rotate" />
					</div>	
				}
				{
					filtered.map(each => {
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
		)
	}
}
