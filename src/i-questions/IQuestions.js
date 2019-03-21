import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../markdownViewer/renderers/codeblocks';
import Layout from '../layout/Layout';
import Loader from 'react-loaders';
import 'loaders.css/src/animations/ball-rotate.scss';
import urls from '../data-layer/urls'
export default class iQuestions extends Component {

	state = {
		markDown: [],
		react: [],
		html: [],
		css :[],
		js:[],
		searchStr: '',
		filtered: []
	};

	componentDidMount() {
		const urlParams = this.props.location.search.split('=')[ 1 ]
		const searchStr = urlParams ? urlParams.replace(/%20/g,' ') : ''
		this.setState({ searchStr })
		let calls = []
		let markDown = []
		urls.iQuestions.forEach(eachURL=>{
			const call = fetch(eachURL).then(res=>res.text())
			calls.push(call)
		})
		Promise.all(calls)
		.then(topics=>{
			topics.forEach(topic=>{
				markDown = markDown.concat(topic.split('---'))
			})
			this.setState({ 
				markDown, 
				filtered:markDown,
			},()=>this.handleSearch(searchStr))
		})
		.catch(err=>{
			console.log('Error fetching interview questions',err)
		})
	}

	handleSearch(searchStr){
		const { markDown, html, css, javascript } = this.state
		const filtered = []
		this.setState({
			searchStr
		})
		this.props.history.replace(`/interviewQuestions?search=${ searchStr }`)
		markDown.forEach(each=>{
			if(each.toLowerCase().indexOf(searchStr.toLowerCase()) > -1 ){
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
		const { markDown, searchStr, filtered, react, html, css, javascript } = this.state
		return (
			<Layout>
				<div className='markdown'>
					<div className="markdown__search-bar">
						<input className="markdown__search-bar__input" placeholder='Search' value={ searchStr } onChange={ e=>this.handleSearch(e.target.value) } />
					</div>
					{
						!markDown.length && 
						<div>
							<Loader className='markdown__loader' type="ball-rotate" />
						</div>	
					}
					{
						markDown.length && !filtered.length &&
						<div>
							<span className='center'>No Results</span>
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
			</Layout>	
		)
	}
}
