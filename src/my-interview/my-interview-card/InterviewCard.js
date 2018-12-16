import React from 'react'
var HtmlToReactParser = require('html-to-react').Parser;
var htmlToReactParser = new HtmlToReactParser();

export default ({ interview }) => {
  return (
	<div className="int-card">
		<div className="int-card__question">
			{interview.question }
		</div>
		<div className="int-card__answer">
			{interview.answer }
		</div>
	</div>
  )
}
