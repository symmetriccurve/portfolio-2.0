import React from 'react'
var HtmlToReactParser = require('html-to-react').Parser;
var htmlToReactParser = new HtmlToReactParser();

export default ({ blogPost }) => {
	debugger
  return (
	<div className="b-cards__b-card">
		<div className="b-card__date">
			<span className="b-card__date-text"> 27th June 2018</span>
		</div>
		<div className="b-card__body">
			<div className="b-card__description">
				<span className="b-card__description-text">
					{ htmlToReactParser.parse(blogPost.htmlMarkUp) }
				</span>
			</div>
			<div className="b-card__buttons">
				{/* <a href="https://medium.com/@beldevikram/this-is-a-test-medium-post-291f4202e141">
					<div className="b-card__button">
              Read
					</div>
				</a> */}
				{/* <a href=''>
					<div className="b-card__button">
              Read
					</div>
				</a> */}
			</div>
		</div>
	</div>
  )
}
