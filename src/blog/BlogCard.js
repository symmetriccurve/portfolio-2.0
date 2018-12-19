import React, { Component } from 'react'
var HtmlToReactParser = require('html-to-react').Parser;
var htmlToReactParser = new HtmlToReactParser();
import Editor from '../editor/Editor'
const NUMBER_OF_CLICK_TO_ENABLE_EDIT_MODE = 10
/* 
	@TODO
		A proper authentication needed to be added to edit content
*/
export default class componentName extends Component {
	state ={
		clicks:0
	}

	handleClick(){
		const clicks = this.state.clicks + 1
		this.setState({
			clicks
		})
	}

	handleCancel(){
		this.setState({
			clicks: 0
		})
	}

	render() {
		const { clicks } = this.state
		const { blogPost } = this.props
		if(clicks > NUMBER_OF_CLICK_TO_ENABLE_EDIT_MODE){
				return (
					<div>
						<Editor { ...this.props } onCancel={ ()=>this.handleCancel() }/>
					</div>	
				)
		}
		return (
			<div className="b-cards__b-card" onClick={ ()=>this.handleClick() }>
				<div className="b-card__date">
					<span className="b-card__date-text"> 27th June 2018</span>
				</div>
				<div className="b-card__body">
					<div className="b-card__description">
						<span className="b-card__description-text">
							{ htmlToReactParser.parse(blogPost.htmlMarkUp) }
						</span>
					</div>
				</div>
			</div>
		)
	}
}
