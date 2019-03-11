import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import CodeBlock from './renderers/codeblocks';
import Loader from 'react-loaders';
import 'loaders.css/src/animations/ball-rotate.scss';
export default class MarkDownViewer extends Component {

	state = {
		markDown: [],
		searchStr: '',
		filtered: []
	};

	componentDidMount() {
		fetch(this.props.urlToPullMarkDownFrom)
			.then(res => {
				return res.text();
			})
			.then(resText => {
				resText = resText.split('---')
				this.setState({
					markDown: resText,
					filtered: resText
				});
			})
			.catch(err => {
				console.log('error', err);
			});
	}

	handleSearch(e){
		const { markDown } = this.state
		const { value } = e.target
		const filtered = []
		this.setState({
			searchStr: value
		})

		markDown.forEach(each=>{
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
		const { showSearchBar } = this.props
		const { searchStr, filtered, markDown } = this.state
		return (
			<div className='markdown'>
				{ 
					showSearchBar && 
					<div className="markdown__search-bar">
						<input className="markdown__search-bar__input" placeholder='Search' value={ searchStr } onChange={ e=>this.handleSearch(e) } />
					</div>
				}
				{
					!markDown.length && 
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
